// Slovník překladů pro mezijazyčné rozhraní. Hlavní jazyk — čeština (cs).
// Pro přidání dalších jazyků doplňte nový klíč do window.I18N se stejnou strukturou.
window.I18N = {
  current: 'cs',
  available: ['cs'],
  cs: {
    brand: 'Pan domácí počítače',
    nav_home: 'Domů',
    nav_services: 'Služby',
    nav_contact: 'Kontakt',
    cta_consult: 'Domluvit návštěvu',
    cta_services: 'Prohlédnout služby',
    cta_write: 'Napsat e-mail',
    badge_free: 'První návštěva zdarma',
    badge_no_fear: 'Bez strachu z techniky',
    back_home: '← Zpět na úvod',
    prev_label: '← Předchozí',
    next_label: 'Další →',
    footer_about: 'Výjezdní mistr, který si u vás doma sedne, srozumitelně vysvětlí a v klidu vyřeší. Cesta a první rada — vždy zdarma.',
    footer_services: 'Služby',
    footer_contact: 'Spojte se',
    footer_copy: '© 2026 Pan domácí počítače. S klidem a bez strachu.',
    footer_made: 'Tvořeno s úctou k vašemu času.'
  }
};

function applyI18n(){
  var dict = window.I18N[window.I18N.current] || window.I18N.cs;
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    var key = el.getAttribute('data-i18n');
    if (dict[key]) el.innerHTML = dict[key];
  });
  document.documentElement.lang = window.I18N.current;
}
