const fillerText = "This is a string that will be used to fill space in the journal"
const censoredData = `March 10th 89,${fillerText},June 12th 91,Name,Richard,October 2nd 93,Twinkle Twinkle Lit`;
const key = "9Nc2UP6etJzwCB6rwbk_PQeF";
const url = "https://api.funtranslations.com/translate/enderman.json?text=" + censoredData + "&api_key=" + key;
fetch(url)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    console.log(json);

    const objKeys = censoredData.split(",");
    const translatedVals = json.contents.translated.split(",");
    const censoredObjects = {};
    for (let i = 0; i < objKeys.length; i++) {
      censoredObjects[objKeys[i]] = translatedVals[i];
    }

    const entry1 = `${censoredObjects["March 10th 89"]}\nIt's crazy to remember ${censoredObjects["Name"]}\'s already a year old! It's crazy how fast time flies. Even with all the nursing and sleepless nights, I'd say it was worth it.\nIt's been a lot easier lately to keep him distracted with his toys, which is nice when I need him to tire himself out… these days it's been all his blocks and shapes. So typical baby distractions, although he does enjoy throwing them a little more than stacking and matching them.`
    const entry2 = `${censoredObjects["June 12th 91"]}\n${censoredObjects["Name"]} is so funny… I was doing dishes after dinner when he came up to me just sobbing, demanding to know where his stuffed animal ${censoredObjects["Richard"]} was.\nTurns out he was holding ${censoredObjects["Richard"]} in his left hand and just completely forgot! If he's already forgetful at this age, I'd hate to see what else he forgets when he gets older…`
    const entry3 = `${censoredObjects["October 2nd 93"]}\nToday I taught ${censoredObjects["Name"]} some more piano! It's been a little struggle getting him to remember the keys, but I think he can finally do the first part of \"${censoredObjects["Twinkle Twinkle Lit"]}tle Star\" properly. Who knows, maybe he'll grow up to be a concert pianist! I won't force it on him, but I'll give him a little nudge and encouragement.`

    const text = entry1 + "\n" + `${censoredObjects[fillerText]}` + "\n" + entry2 + "\n" + `${censoredObjects[fillerText]}` + "\n" + entry3;
    const textNode = document.createTextNode(text);
    const entryNode = document.getElementById("journalText");
    entryNode.style.whiteSpace = "pre-wrap";
    entryNode.appendChild(textNode);

    console.log(text);
  });
