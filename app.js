(function () {
  "use strict";

  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var has = function (v) { return v !== undefined && v !== null && String(v).trim() !== ""; };

  function waLink(number, message) {
    if (!has(number)) return "";
    var digits = String(number).replace(/[^0-9]/g, "");
    var url = "https://wa.me/" + digits;
    if (has(message)) url += "?text=" + encodeURIComponent(message);
    return url;
  }

  function render(data) {
    var site = data.site || {};
    var contact = data.contact || {};

    // ---- Header / brand ----
    ["brand-name", "mobile-brand", "footer-brand"].forEach(function (id) {
      if (has(site.brand)) $(id).textContent = site.brand;
    });
    if (has(site.pageTitle)) document.title = site.pageTitle;
    if (has(site.metaDescription)) {
      var m = document.querySelector('meta[name="description"]');
      if (m) m.setAttribute("content", site.metaDescription);
    }

    // ---- Hero ----
    if (has(site.headline)) $("hero-headline").textContent = site.headline;
    if (has(site.intro)) $("hero-intro").textContent = site.intro;
    if (site.heroPhoto && has(site.heroPhoto.src)) {
      $("hero-img").src = site.heroPhoto.src;
      $("hero-img").alt = site.heroPhoto.alt || "";
    }

    // ---- Contact CTAs (header, hero, wa float, contact section) ----
    var wa = waLink(contact.whatsapp, contact.whatsappMessage);
    [$("header-cta"), $("hero-cta"), $("contact-cta"), $("wa-float")].forEach(function (el) {
      if (!el) return;
      if (wa) {
        el.href = wa;
        el.target = "_blank";
        el.rel = "noopener";
        el.removeAttribute("data-empty-hide");
      } else {
        el.href = "#contact";
      }
    });
    if (!wa) $("wa-float").setAttribute("data-empty-hide", "");

    // ---- Services ----
    var servicesTitle = data.servicesTitle, servicesIntro = data.servicesIntro;
    if (has(servicesTitle)) $("services-title").textContent = servicesTitle;
    if (has(servicesIntro)) $("services-intro").textContent = servicesIntro;
    var sg = $("services-grid");
    (data.services || []).forEach(function (svc, i) {
      var el = document.createElement("article");
      el.className = "service";
      var html = '<p class="service-index">' + String(i + 1).padStart(2, "0") + "</p>";
      html += "<h3>" + esc(svc.title) + "</h3>";
      if (has(svc.summary)) html += '<p class="summary">' + esc(svc.summary) + "</p>";
      if (svc.stops && svc.stops.length) {
        html += '<ul class="service-stops">' + svc.stops.map(function (s) {
          return "<li><span>" + esc(s) + "</span></li>";
        }).join("") + "</ul>";
      }
      if (svc.details && svc.details.length) {
        html += '<dl class="service-details">' + svc.details.map(function (d) {
          var val = has(d.value) ? esc(d.value) : '<span class="blank">to be added</span>';
          return '<div class="row"><dt>' + esc(d.label) + "</dt><dd>" + val + "</dd></div>";
        }).join("") + "</dl>";
      }
      el.innerHTML = html;
      sg.appendChild(el);
    });

    // ---- Places ----
    if (has(data.placesTitle)) $("places-title").textContent = data.placesTitle;
    if (has(data.placesIntro)) $("places-intro").textContent = data.placesIntro;
    var pl = $("places-list");
    var areaLabel = { west: "West Sumba", east: "East Sumba" };
    (data.placeGroups || []).forEach(function (group, i) {
      var wrap = document.createElement("article");
      wrap.className = "place-group";

      var text = document.createElement("div");
      text.className = "place-text";
      var th = '<p class="group-index">' + String(i + 1).padStart(2, "0") + "</p>";
      th += "<h3>" + esc(group.title) + "</h3>";
      if (has(group.intro)) th += "<p>" + esc(group.intro) + "</p>";
      if (group.places && group.places.length) {
        th += '<ul class="place-list">' + group.places.map(function (p) {
          var tag = areaLabel[p.area] ? '<span class="area-tag">' + areaLabel[p.area] + "</span>" : "";
          var note = has(p.note) ? '<p class="place-note">' + esc(p.note) + "</p>" : "";
          return "<li><p class=\"place-name\">" + esc(p.name) + tag + "</p>" + note + "</li>";
        }).join("") + "</ul>";
      }
      text.innerHTML = th;

      var photos = document.createElement("div");
      var count = (group.photos || []).length;
      photos.className = "place-photos count-" + Math.min(count, 3);
      (group.photos || []).forEach(function (p) {
        var fig = document.createElement("figure");
        var img = document.createElement("img");
        img.src = p.src; img.alt = p.alt || ""; img.loading = "lazy";
        if (p.focus) img.style.objectPosition = p.focus;
        fig.appendChild(img);
        if (has(p.caption)) {
          var cap = document.createElement("figcaption");
          cap.className = "photo-caption";
          cap.textContent = p.caption;
          fig.appendChild(cap);
        }
        photos.appendChild(fig);
      });

      wrap.appendChild(text);
      wrap.appendChild(photos);
      pl.appendChild(wrap);
    });

    // ---- About ----
    var about = data.about || {};
    if (has(about.title)) $("about-title").textContent = about.title;
    var aboutPhoto = $("about-photo");
    if (has(about.photo)) {
      aboutPhoto.innerHTML = '<img src="' + esc(about.photo) + '" alt="' + esc(about.photoAlt || "") + '" loading="lazy">';
    } else {
      aboutPhoto.classList.add("empty");
      aboutPhoto.textContent = "Add a photo of Tinus here";
    }
    var atxt = $("about-text");
    if (has(about.text)) {
      atxt.textContent = about.text;
    } else {
      atxt.innerHTML = '<span class="blank">A short introduction from Tinus goes here &mdash; where he grew up, how long he has been guiding, and what he loves showing visitors.</span>';
    }
    var facts = $("about-facts");
    (about.facts || []).forEach(function (f) {
      if (!has(f.value)) return;
      var dt = document.createElement("dt"); dt.textContent = f.label;
      var dd = document.createElement("dd"); dd.textContent = f.value;
      facts.appendChild(dt); facts.appendChild(dd);
    });
    if (!facts.children.length) facts.setAttribute("data-empty-hide", "");

    // ---- Reviews ----
    var reviews = data.reviews || [];
    var reviewsSection = document.getElementById("reviews");
    if (reviews.length) {
      reviewsSection.removeAttribute("data-empty-hide");
      var rg = $("reviews-grid");
      reviews.forEach(function (r) {
        var div = document.createElement("div");
        div.className = "review";
        div.innerHTML = "<p>\u201C" + esc(r.quote) + "\u201D</p><p class=\"review-who\">" + esc(r.name || "") + "</p>";
        rg.appendChild(div);
      });
    }

    // ---- Info ----
    if (has(data.infoTitle)) $("info-title").textContent = data.infoTitle;
    var il = $("info-list");
    (data.info || []).forEach(function (item) {
      if (!has(item.text)) return;
      var div = document.createElement("div");
      div.className = "info-item";
      div.innerHTML = "<h3>" + esc(item.title) + "</h3><p>" + esc(item.text) + "</p>";
      il.appendChild(div);
    });
    if (data.infoPhoto && has(data.infoPhoto.src)) {
      $("info-photo-img").src = data.infoPhoto.src;
      $("info-photo-img").alt = data.infoPhoto.alt || "";
    }

    // ---- Contact ----
    if (has(data.contactTitle)) $("contact-title").textContent = data.contactTitle;
    if (has(data.contactIntro)) $("contact-intro").textContent = data.contactIntro;
    if (data.contactPhoto && has(data.contactPhoto.src)) {
      $("contact-img").src = data.contactPhoto.src;
      $("contact-img").alt = data.contactPhoto.alt || "";
    }
    var sl = $("steps-list");
    (data.steps || []).forEach(function (s, i) {
      var li = document.createElement("li");
      li.innerHTML = '<span class="step-num">' + (i + 1) + '</span><div class="step-body"><h4>' + esc(s.title) + "</h4><p>" + esc(s.text) + "</p></div>";
      sl.appendChild(li);
    });

    var channels = [];
    if (wa) channels.push(["WhatsApp", wa, true]);
    if (has(contact.phone)) channels.push(["Phone", "tel:" + contact.phone.replace(/[^0-9+]/g, ""), false, contact.phone]);
    if (has(contact.email)) channels.push(["Email", "mailto:" + contact.email, false, contact.email]);
    if (has(contact.instagram)) channels.push(["Instagram", contact.instagram, true]);
    if (has(contact.facebook)) channels.push(["Facebook", contact.facebook, true]);
    if (has(contact.tripadvisor)) channels.push(["Tripadvisor", contact.tripadvisor, true]);
    var cc = $("contact-channels");
    if (channels.length) {
      channels.forEach(function (c) {
        var li = document.createElement("li");
        li.innerHTML = "<span>" + c[0] + '</span><a href="' + esc(c[1]) + '"' + (c[2] ? ' target="_blank" rel="noopener"' : "") + ">" + esc(c[3] || "Open") + "</a>";
        cc.appendChild(li);
      });
    } else {
      cc.innerHTML = '<li><span class="blank">Add a WhatsApp number, phone or email in content.json</span></li>';
    }
    if (has(contact.replyTime)) $("reply-time").textContent = contact.replyTime;

    if (has(site.footerNote)) $("footer-note").textContent = site.footerNote;

    // ---- Mobile menu ----
    var openBtn = $("menu-open"), closeBtn = $("menu-close"), menu = $("mobile-menu");
    function toggle(open) {
      menu.classList.toggle("open", open);
      openBtn.setAttribute("aria-expanded", open ? "true" : "false");
    }
    openBtn.addEventListener("click", function () { toggle(true); });
    closeBtn.addEventListener("click", function () { toggle(false); });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { toggle(false); });
    });
  }

  fetch("content.json", { cache: "no-store" })
    .then(function (r) {
      if (!r.ok) throw new Error("content.json not found");
      return r.json();
    })
    .then(render)
    .catch(function (err) {
      document.getElementById("main").innerHTML =
        '<div class="wrap" style="padding:4rem 0;"><p>This page could not load <code>content.json</code>. ' +
        "If you're viewing this file directly from a folder, run a local server (see README) " +
        "or open the site through GitHub Pages.</p></div>";
      console.error(err);
    });
})();
