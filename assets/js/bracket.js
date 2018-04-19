var teams = [

    {
        id: 1,
        logo: '58eeb797ee9418469d17ee04.png',
        w: 110,
        h: 45
    },

    {
        id: 2,
        logo: '72376676-a37f-40fa-b2f9-d6d057a17c7f.png',
        w: 110,
        h: 45
    },


    {
        id: 3,
        logo: 'BladeAndSoul_Logo-e1447967758861.png',
        w: 110,
        h: 45
    },


    {
        id: 4,
        logo: 'bless.png',
        w: 110,
        h: 45
    },


    {
        id: 5,
        logo: 'cabal LOGO.png',
        w: 110,
        h: 45
    },


    {
        id: 6,
        logo: 'Crossfire_logo_(1).png',
        w: 110,
        h: 45
    },


    {
        id: 7,
        logo: 'cs-go-logo-.png',
        w: 110,
        h: 45
    },


    {
        id: 8,
        logo: 'flat,800x800,070,f.jpg',
        w: 110,
        h: 45
    },


    {
        id: 9,
        logo: 'Flyff_logo.svg.png',
        w: 110,
        h: 45
    },


    {
        id: 10,
        logo: 'fortnite-png-13.png',
        w: 110,
        h: 45
    },


    {
        id: 11,
        logo: 'game-logo-wow.png',
        w: 110,
        h: 45
    },


    {
        id: 12,
        logo: 'Gwent_logo.png',
        w: 110,
        h: 45
    },


    {
        id: 13,
        logo: 'Injustice 2 LOGO.png',
        w: 110,
        h: 45
    },


    {
        id: 14,
        logo: 'Logo_Dota_3.png',
        w: 110,
        h: 45
    },


    {
        id: 15,
        logo: 'logoGW2.png',
        w: 110,
        h: 45
    },


    {
        id: 16,
        logo: 'logoMU.png',
        w: 110,
        h: 45
    },


    {
        id: 17,
        logo: 'lol-logo.png',
        w: 110,
        h: 45
    },


    {
        id: 18,
        logo: 'minecraft_hd_logo_by_nuryrush-da2aumi.png',
        w: 110,
        h: 45
    },


    {
        id: 19,
        logo: 'mortal-kombat-x-logo-01.png',
        w: 110,
        h: 45
    },


    {
        id: 20,
        logo: 'Overwatch_logo_by_feeerieke-da4xuzp.png',
        w: 110,
        h: 45
    },


    {
        id: 21,
        logo: 'point-blank-logo2.png',
        w: 110,
        h: 45
    },


    {
        id: 22,
        logo: 'pub-playerunknowns-battlegrounds-logo.png',
        w: 110,
        h: 45
    },


    {
        id: 23,
        logo: 'Ragnarok_logo.png',
        w: 110,
        h: 45
    },

    {
        id: 24,
        logo: 'Rainbow Six logo.png',
        w: 110,
        h: 45
    },


    {
        id: 25,
        logo: 'TERA.png',
        w: 110,
        h: 45
    },


    {
        id: 26,
        logo: 'the-elder-scrolls-logo.png',
        w: 110,
        h: 45
    },


    {
        id: 27,
        logo: 'theVideoGameGallery_32294_3000x775.png',
        w: 110,
        h: 45
    },

    {
        id: 28,
        logo: 'Tibia_Logo.png',
        w: 110,
        h: 45
    },


    {
        id: 29,
        logo: 'trove_logo_1389x428.png',
        w: 110,
        h: 45
    },


    {
        id: 30,
        logo: 'viVMDF8.png',
        w: 80,
        h: 45
    },


    {
        id: 31,
        logo: 'WCXKwa.png',
        w: 110,
        h: 55
    },


    {
        id: 32,
        logo: 'xivlogo.png',
        w: 110,
        h: 55
    }

];

var availableTeams = teams.reduce(function (acc, val) {
    acc[val.id] = val;
    return acc;
}, {});

var sortAm = Math.floor(Math.random() * 20) + 1;

var urlBase = '/assets/logos/';

for(i = 0; i <= sortAm; i++) {
    teams = teams.sort(function() {
        return .5 - Math.random();
    });
}

document.querySelectorAll('.first_match').forEach(function (m) {
    var team = teams.pop();
    var img = createImg(team.logo, [], team.w, team.h);
    var f = team.id;
    var t = m.children[0].getAttribute('data-for-match');
    bindEvt(img, f, t);
    m.children[0].appendChild(img);
});

function createImg(url,classes, w, h ) {

    var i = document.createElement('img');

    if(w) {
        i.width = w;
    }

    if(h) {
        i.height = h;
    }

    i.src = urlBase+url;

    var c = (Array.isArray(classes)) ? classes : [];

    i.classList.add(...c);

    return i;

}

function bindEvt(dom, f, t) {
    dom.addEventListener('click', function () {

        var next = document.querySelector('[data-match="'+t+'"]');

        if(next.children.length) {
            return;
        }

        var canAdvanceMatch = Array.from(
            document.querySelectorAll('[data-for-match="'+t+'"]')
        ).map(function (s) {
            return s.children.length > 0;
        }).reduce(function (acc, i) {
            return acc && i;
        }, true);

        if(! canAdvanceMatch) {
            return;
        }

        var team = availableTeams[f];
        var slot = document.querySelector('[data-match="'+t+'"]');
        var img = createImg(team.logo, [], team.w, team.h);
        bindEvt(img, f, slot.getAttribute('data-for-match'));
        slot.appendChild(img);
    });
}

function screenshot() {
    domtoimage.toJpeg(document.getElementById('printscreen'), { quality: 0.95 })
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = 'bracket-games.jpeg';
            link.href = dataUrl;
            link.click();
        });
}

function resetMatches() {
    document.querySelectorAll('[data-match]').forEach(function (m) {
        if(m.getAttribute('data-match') > 32 && m.children.length) {
            m.children[0].remove();
        }
    })
}
