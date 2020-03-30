const j = `{
    "masks":[
        {
            "name":"Dish Towel",
            "effectiveness":0.82,
            "breathability":0.62,
            "reusable":1,
            "rating":"medium",
            "src":"/images/dish_towel.webp",
            "message":"This filter is at best 82% as effective as a surgical mask. It is comparatively less breathable, so make sure it feels comfortable for you to breathe through. It is washable and reusable — you can either machine-wash it or soak it in boiling water for ten minutes between uses to keep it clean."
        },
        {
            "name":"Vacuum Filter Bag",
            "effectiveness":0.97,
            "breathability":-0.04,
            "reusable":0,
            "rating":"low",
            "src":"/images/vacuum_bag.jpg",
            "message":"This filter is at best 97% as effective as a surgical mask. However, it has less than half the breathability, so it may be uncomfortable. Make sure that when you put it on, you are able to breathe through it with ease. Avoid wearing it for long periods of time. It cannot be washed or reused, so consider making multiple at a time."
        },
        {
            "name":"HEPA Filter Bag",
            "effectiveness":0.97,
            "breathability":-0.20,
            "reusable":0,
            "rating":"low",
            "src":"/images/hepa.jpg",
            "message":"This filter is at best 97% as effective as a surgical mask. However, it has less than half the breathability, so it may be uncomfortable. Make sure that when you put it on, you are able to breathe through it with ease. Avoid wearing it for long periods of time. It cannot be washed or reused, so consider making multiple at a time."
        },
        {
            "name":"Cotton Blend T-shirt",
            "effectiveness":0.79,
            "breathability":0.72,
            "reusable":1,
            "rating":"medium",
            "src":"/images/cotton_blend.webp",
            "message":"This filter is at best 79% as effective as a surgical mask. It is comparatively a little less breathable, so make sure it feels comfortable for you to breathe through. It is washable and reusable — you can either machine-wash it or soak it in boiling water for ten minutes between uses to keep it clean."
        },
        {
            "name":"Antimicrobial Pillowcase",
            "effectiveness":0.76,
            "breathability":0.85,
            "reusable":1,
            "rating":"normal",
            "src":"/images/AM.jpg",
            "message":"This filter is at best 76% as effective as a surgical mask. It is comparatively a little less breathable, so make sure it feels comfortable for you to breathe through. It is washable and reusable — you can either machine-wash it or soak it in boiling water for ten minutes between uses to keep it clean."
        },
        {
            "name":"Linen",
            "effectiveness":0.7,
            "breathability":1.25,
            "reusable":1,
            "rating":"very high",
            "src":"/images/linen.jpg",
            "message":"This filter is at best 70% as effective as a surgical mask. It is comparatively much more breathable, so it should be comfortable to wear throughout the day. It is washable and reusable — you can either machine-wash it or soak it in boiling water for ten minutes between uses to keep it clean."
        },
        {
            "name":"Pillowcase",
            "effectiveness":0.64,
            "breathability":1.28,
            "reusable":1,
            "rating":"very high",
            "src":"/images/pillow.jpg",
            "message":"This filter is at best 64% as effective as a surgical mask. It is comparatively much more breathable, so it should be comfortable to wear throughout the day. It is washable and reusable — you can either machine-wash it or soak it in boiling water for ten minutes between uses to keep it clean."
        },
        {
            "name":"Silk",
            "effectiveness":0.61,
            "breathability":1.11,
            "reusable":1,
            "rating":"high",
            "src":"/images/silk.jpg",
            "message":"This filter is at best 61% as effective as a surgical mask. It is comparatively much more breathable, so it should be comfortable to wear throughout the day. It is washable and reusable — you can either machine-wash it or soak it in boiling water for ten minutes between uses to keep it clean."
        },
        {
            "name":"Scarf",
            "effectiveness":0.55,
            "breathability":1.13,
            "reusable":1,
            "rating":"high",
            "src":"/images/scarf.jpg",
            "message":"This filter is at best 55% as effective as a surgical mask. It is comparatively more breathable, so it should be comfortable to wear throughout the day. It is washable and reusable — you can either machine-wash it or soak it in boiling water for ten minutes between uses to keep it clean."
        },
        {
            "name":"Cotton T-Shirt",
            "effectiveness":0.57,
            "breathability":1.08,
            "reusable":1,
            "rating":"normal",
            "src":"/images/cotton.jpg",
            "message":"This filter is at best 57% as effective as a surgical mask. It is about as breathable, so it should be comfortable to wear throughout the day. It is washable and reusable — you can either machine-wash it or soak it in boiling water for ten minutes between uses to keep it clean."
        },
        {
            "name":"Reusable Grocery Bag",
            "effectiveness":1.0,
            "breathability":1.0,
            "reusable":1,
            "rating":"normal",
            "src":"/images/bag.jpg",
            "message":"This filter is at best equally as effective as a surgical mask. It is about as breathable, so it should be relatively comfortable to wear throughout the day. It is washable and reusable — you can either machine-wash it or soak it in boiling water for ten minutes between uses to keep it clean."
        }
    ],
    "adhesives":[
        {
            "name":"duct tape",
            "rank":3,
            "reusable":1,
            "washable":0,
            "src":""
        },
        {
            "name":"fabric tape",
            "rank":2,
            "reusable":1,
            "washable":1,
            "src":""
        },
        {
            "name":"fabric glue",
            "rank":1,
            "reusable":1,
            "washable":1,
            "src":""
        },
        {
            "name":"industrial tape",
            "rank":4,
            "reusable":1,
            "washable":0,
            "src":""
        },
        {
            "name":"hot glue",
            "rank":5,
            "reusable":0,
            "washable":0,
            "src":""
        }
    ]
}`;
const values = {
    1: "As much filtration as possible",
    2: "Prioritize filtration",
    3: "Balanced between filtration and breathability",
    4: "Prioritize breathability",
    5: "As much breathability as possible"
}
var q1 = localStorage.getItem("q1");     //breathability     
var q2 = localStorage.getItem("q2");    //reusable
var q3 = localStorage.getItem("q3");    //washable
var sewing = localStorage.getItem("s");
const DATA = JSON.parse(j);
var masks = DATA['masks'];
adhesives = DATA['adhesives'];
var idx = 1;
var idxa = 1;
var adhesive = null;


$("#beginner").click(function(){
    window.location.href = '/beginner.html';
    initQs();
})

$("#advanced").click(function(){
    window.location.href = '/advanced.html';
    initQs();
})

function initQs() {
    var sewing = localStorage.setItem("s",-1);
    var q1 = localStorage.setItem("q1", 3);
    var q2 = localStorage.setItem("q2", -1);
    var q3 = localStorage.setItem("q3", -1);
}

function calculate(id) {
    if (id == 's') {
        if(q2 == -1) {
            alertError("Please answer all questions.")
            return;
        }
    }
    else {
        if(q2 == -1 || (q2 == 1 && q3 == -1)) {
            alertError("Please answer all questions.")
            return;
        }
    }
    updateQs();
    window.location.href = '/result.html';
}

function valueUpdate(value, id) {
    $("#q" + id + "_value").text(values[value]);
    q1 = value;
}

function updateYesNo(question, value, isSewing) {
    if(isSewing == 0) {
        if(question == 2) {
            q2 = value;
            if (value == 1) {
                $("#q3").show();
            }
            else {
                $("#q3").hide();
            }
        }
        else q3 = value;
        sewing = 0;
    }
    else {
        q2 = value;
        sewing = 1;
    }
}

function updateQs(){
    localStorage.setItem("s", sewing);
    localStorage.setItem("q1", q1);
    localStorage.setItem("q2", q2);
    localStorage.setItem("q3", q3);
}

function loadResults() {
    updateQs();
    if (sewing == 1) loadSew();
    else loadAdhes();
}

function loadSew() {
    $("#disclaimer").hide();
    $("#prev").hide();
    filterMasks();
    loadResult(1);
    $("#resultBox").show();
}

function loadAdhes() {
    $("#disclaimer").hide();
    $("#prevA").hide();
    filterAdhesive();
    loadAResult(1);
    $("#aBox").show(); 
}

function selectAdhesive() {
    adhesive = adhesives[idxa];
    $("#aBox").hide();
    loadSew();
}

function filterMasks() {
    if(q2 == 1) {
        masks = masks.filter(function(item, idx) {
            return item['reusable'] == 1;
        });
    }
    if (q1 == 1) {
        masks.sort((a, b) => (a['effectiveness'] <  b['effectiveness']) ? 1 : -1);
    }
    else if (q1 == 2) {
        masks.sort((a, b) => (a['breathability'] + a['effectiveness']*3 < b['breathability'] + b['effectiveness']*3) ? 1 : -1);
    }
    else if (q1 == 3) {
        masks.sort((a, b) => (a['breathability'] + a['effectiveness'] < b['breathability'] + b['effectiveness']) ? 1 : -1);
    }
    else if (q1 == 4) {
        masks.sort((a, b) => (a['breathability']*3 + a['effectiveness'] < b['breathability']*3 + b['effectiveness']) ? 1 : -1);
    }
    else {
        masks.sort((a, b) => (a['breathability'] < b['breathability'] ) ? 1 : -1);
    }
}

function filterAdhesive() {
    if(q2 == 1) {
        adhesives = adhesives.filter(function(item, idx) {
            return item['reusable'] == 1;
        });
    }
    if (q3 == 1) {
        adhesives = adhesives.filter(function(item, idx) {
            return item['washable'] == 1;
        });
    }
    adhesives.sort((a, b) => (a['rank'] > b['rank'] ) ? 1 : -1);
}

function alertError(message) {
    alert(message);
}

function loadResult(i) {
    var toDisplay = masks[i-1];
    $("#picture").attr('src', toDisplay['src']);
    $("#name").text(i + ". " + toDisplay['name']);
    $("#message").text(toDisplay['message']); 
}

function loadAResult(i) {
    var toDisplay = adhesives[i-1];
    //$("#pictureA").attr('src', toDisplay['src']);
    $("#nameA").text(i + ". " + toDisplay['name']);
    //$("#messageA").text(toDisplay['message']); 
}

function prev() {
    idx = idx - 1;
    if (idx == 1) {
        $("#prev").hide(); 
    }
    if (idx == 4) {
        $("#next").show();
    }
    loadResult(idx);
}

function next() {
    idx = idx + 1;
    if (idx == 5) {
        $("#next").hide(); 
    }
    if (idx == 2) {
        $("#prev").show();
    }
    loadResult(idx);
}

function prevA() {
    idxa = idxa - 1;
    if (idxa == 1) {
        $("#prevA").hide(); 
    }
    if (idxa == adhesives.length - 1) {
        $("#nextA").show();
    }
    loadAResult(idxa);
}

function nextA() {
    idxa = idxa + 1;
    if (idxa == adhesives.length) {
        $("#nextA").hide(); 
    }
    if (idxa == 2) {
        $("#prevA").show();
    }
    loadAResult(idxa);
}