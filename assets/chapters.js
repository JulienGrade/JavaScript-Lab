window.JS_LAB_CHAPTERS = [
  {
    "id": "introduction",
    "group": "Démarrer",
    "title": "Lire et exécuter du JavaScript",
    "lead": "JavaScript donne un comportement aux pages Web et s’exécute aussi hors du navigateur. Ce lab utilise le navigateur pour les exemples liés au DOM et à fetch.",
    "mental": "Le navigateur lit le HTML, construit la page, puis lance le JavaScript. La console permet d’observer une valeur sans l’afficher dans la page. Vous pourrez découvrir les modules plus tard dans le parcours.",
    "syntaxIntro": "Dans une page HTML, defer demande au navigateur d’attendre la lecture du HTML avant de lancer le fichier JavaScript. La console du navigateur affiche les appels à console.log.",
    "syntax": "<!-- index.html -->\n<script defer src=\"./main.js\"></script>\n\n// main.js\nconsole.log('Bonjour JavaScript');",
    "examples": [
      {
        "title": "Premier programme",
        "code": "const message = 'Bonjour JavaScript';\nconsole.log(message);",
        "output": "Bonjour JavaScript",
        "explain": "La variable garde la chaîne, puis console.log affiche sa valeur dans la console.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "La première ligne crée le nom message et y range du texte.",
          "La deuxième ligne lit ce nom et affiche sa valeur dans la console, ce qui donne le résultat indiqué."
        ]
      },
      {
        "title": "Un script relié à une page",
        "code": "const titre = document.querySelector('h1');\ntitre.textContent = 'Bienvenue dans le lab';",
        "output": "Le texte du titre h1 devient « Bienvenue dans le lab ».",
        "explain": "querySelector récupère le premier h1 et textContent modifie son texte. À exécuter sur une page contenant un h1.",
        "context": "Navigateur / DOM",
        "walkthrough": [
          "querySelector cherche le premier titre h1 dans la page HTML.",
          "textContent remplace son texte ; le résultat est visible sur la page, pas seulement dans la console."
        ]
      }
    ],
    "practice": "Pour débuter, ouvrez les outils de développement et regardez la console : les messages et les erreurs y apparaissent. Un script lié avec defer peut s’exécuter après le chargement du HTML.",
    "era": "ES6+",
    "kind": "Environnement",
    "legacy": null,
    "startingPoint": "Vous n’avez pas besoin de connaître un autre langage. Une page HTML décrit ce qui est affiché ; CSS règle son apparence ; JavaScript réagit aux actions et manipule des données. Dans les exemples, console.log écrit dans la console des outils de développement, pas directement sur la page.",
    "terms": [
      {
        "word": "instruction",
        "meaning": "Une action demandée au programme."
      },
      {
        "word": "console",
        "meaning": "Une zone du navigateur où voir les messages et les erreurs."
      },
      {
        "word": "script",
        "meaning": "Un fichier contenant des instructions JavaScript."
      }
    ]
  },
  {
    "id": "variables-types",
    "group": "Fondations",
    "title": "Variables et types",
    "lead": "const et let expriment l’intention : une liaison stable ou une valeur qui doit changer. JavaScript détermine le type d’une valeur à l’exécution.",
    "mental": "Une variable est une étiquette attachée à une valeur. const interdit de réaffecter cette étiquette ; il ne rend pas automatiquement un objet immuable.",
    "syntaxIntro": "Utilisez const par défaut et let lorsque la réaffectation est nécessaire. Les types primitifs incluent string, number, boolean, undefined, bigint, symbol et null.",
    "syntax": "const equipe = 'Orion';\nlet score = 0;\nscore += 10;\n\nconst joueur = { nom: 'Maya' };\njoueur.nom = 'Noa'; // propriété modifiable",
    "examples": [
      {
        "title": "const et let",
        "code": "const nom = 'Maya';\nlet points = 3;\npoints += 2;\nconsole.log(`${nom} : ${points} points`);",
        "output": "Maya : 5 points",
        "explain": "points change ; nom reste lié à la même chaîne. Les accolades dans le template literal insèrent une expression.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "const nom contient le texte Maya ; let points commence à 3.",
          "points += 2 ajoute 2 et remplace la valeur par 5 ; la dernière ligne insère ces deux valeurs dans le message."
        ]
      },
      {
        "title": "Examiner les types",
        "code": "console.log(typeof 42, typeof '42', typeof true);\nconsole.log(typeof undefined, typeof null);",
        "output": "number string boolean\nundefined object",
        "explain": "typeof null vaut object : c’est une ancienne particularité du langage, pas une raison de traiter null comme un objet.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "typeof examine successivement un nombre, du texte et un booléen.",
          "La seconde ligne montre undefined, puis la particularité historique de null : typeof retourne object."
        ]
      }
    ],
    "practice": "N’utilisez pas typeof pour distinguer null : comparez explicitement avec null. Faites attention à la différence entre valeur primitive et objet.",
    "era": "ES6+",
    "kind": "Fondamentaux",
    "legacy": {
      "text": "var est une déclaration d’ancienne génération, à portée de fonction et avec un comportement de remontée parfois surprenant.",
      "code": "var score = 0; // ancien code\nlet scoreActuel = 0; // code moderne"
    },
    "startingPoint": "Une variable donne un nom à une valeur, comme une étiquette sur une boîte. Une valeur peut être du texte, un nombre ou une réponse vrai/faux. Le signe = stocke une valeur : il ne signifie pas « est égal » au sens mathématique.",
    "terms": [
      {
        "word": "valeur",
        "meaning": "Une donnée telle que 3, \"Orion\" ou true."
      },
      {
        "word": "type",
        "meaning": "La famille d’une valeur : texte, nombre, booléen, etc."
      },
      {
        "word": "réaffecter",
        "meaning": "Remplacer la valeur associée à une variable."
      }
    ]
  },
  {
    "id": "operateurs",
    "group": "Fondations",
    "title": "Calculer et comparer avec les opérateurs",
    "lead": "Les opérateurs combinent des valeurs. Ils servent à calculer, comparer et réunir plusieurs questions dans une condition.",
    "startingPoint": "Une expression est un morceau de code qui produit une valeur. Par exemple, 2 + 3 produit 5. Les parenthèses permettent de dire clairement quel calcul faire d’abord. Les tests comme >= produisent true ou false.",
    "terms": [
      {
        "word": "opérateur",
        "meaning": "Symbole qui effectue une opération, comme + ou ===."
      },
      {
        "word": "expression",
        "meaning": "Code qui produit une valeur."
      },
      {
        "word": "booléen",
        "meaning": "Valeur true ou false, souvent utilisée dans une condition."
      }
    ],
    "mental": "Les opérations arithmétiques donnent un nombre ; les comparaisons donnent true ou false. && exige que deux questions soient vraies ; || exige qu’au moins une le soit ; ! inverse une réponse.",
    "syntaxIntro": "Les symboles +, -, *, / et % calculent. Les symboles >, >=, <, <= et === comparent. Utilisez des parenthèses pour rendre les conditions mixtes lisibles.",
    "syntax": "const total = 8 + 4;       // 12\nconst reste = 10 % 3;      // 1\nconst admissible = total >= 10 && reste === 1; // true",
    "examples": [
      {
        "title": "Calculer un total et un reste",
        "code": "const places = 16;\nconst prises = 11;\nconst libres = places - prises;\nconsole.log(libres, 10 % 3);",
        "output": "5 1",
        "explain": "La soustraction calcule les places libres. Le modulo % donne le reste de la division entière de 10 par 3.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "16 - 11 donne 5 ; cette valeur est rangée dans libres.",
          "10 se divise en trois groupes de 3 avec un reste de 1 ; les deux nombres sont affichés."
        ]
      },
      {
        "title": "Combiner des conditions",
        "code": "const joueurs = 3;\nconst autorisation = true;\nconsole.log(joueurs >= 2 && autorisation);\nconsole.log(joueurs === 4 || autorisation);\nconsole.log(!autorisation);",
        "output": "true\ntrue\nfalse",
        "explain": "&& demande deux réponses vraies ; || en accepte une ; ! inverse true en false.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "3 >= 2 et autorisation sont tous les deux vrais : && renvoie true.",
          "3 === 4 est faux, mais autorisation est vraie : || renvoie true. ! inverse ensuite true en false."
        ]
      },
      {
        "title": "Lire des parenthèses",
        "code": "const score = 12;\nconst bonus = 3;\nconsole.log((score + bonus) * 2);\nconsole.log(score + bonus * 2);",
        "output": "30\n18",
        "explain": "Dans la première ligne, les parenthèses forcent l’addition avant la multiplication. Dans la seconde, la multiplication passe d’abord.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "(12 + 3) vaut 15, puis 15 × 2 vaut 30.",
          "Sans ces parenthèses, 3 × 2 vaut 6 d’abord ; 12 + 6 vaut 18."
        ]
      }
    ],
    "practice": "Préférez les parenthèses lorsque plusieurs opérations ou conditions sont combinées. Utilisez === pour une comparaison sans conversion de type.",
    "era": "Fondamentaux JS",
    "kind": "Fondamentaux",
    "legacy": {
      "text": "Les principaux opérateurs existaient avant ES6. La pratique moderne consiste surtout à les utiliser avec const et let et des comparaisons strictes.",
      "code": "const admis = score >= 10 && joueurs === 3;"
    }
  },
  {
    "id": "conversions",
    "group": "Fondations",
    "title": "Conversions et égalité",
    "lead": "Les conversions implicites expliquent beaucoup de comportements déroutants. Des comparaisons strictes rendent l’intention visible.",
    "mental": "Une entrée de formulaire est une chaîne, même si elle contient des chiffres. Avant de calculer, choisissez explicitement la conversion voulue.",
    "syntaxIntro": "Number convertit une chaîne numérique ; Number.isNaN détecte un résultat invalide. === compare sans changer le type des valeurs.",
    "syntax": "const saisie = '12';\nconst quantite = Number(saisie);\nconsole.log(quantite === 12); // true\nconsole.log('12' === 12);     // false",
    "examples": [
      {
        "title": "Convertir une entrée",
        "code": "const joueursSaisis = '4';\nconst joueurs = Number(joueursSaisis);\nconsole.log(joueurs + 1);\nconsole.log(Number.isNaN(Number('quatre')));",
        "output": "5\ntrue",
        "explain": "Sans Number, le signe + avec une chaîne ferait une concaténation : « 41 ». Vérifiez les saisies invalides.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "joueursSaisis est du texte : sans conversion, ajouter 1 produirait le texte 41.",
          "Number transforme ce texte en nombre 4 ; 4 + 1 donne 5. Number(\"quatre\") n’est pas un nombre valide."
        ]
      },
      {
        "title": "Falsy et valeur par défaut",
        "code": "console.log(Boolean(''), Boolean(0), Boolean([]));\nconsole.log(0 || 10);\nconsole.log(0 ?? 10);",
        "output": "false false true\n10\n0",
        "explain": "|| remplace toute valeur falsy. ?? ne remplace que null ou undefined ; il est présenté plus loin comme ajout postérieur à ES6.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "Boolean examine si chaque valeur est considérée vraie ou fausse dans une condition.",
          "|| remplace le zéro par 10 ; ?? garde zéro, car seul null ou undefined déclenche sa valeur de secours."
        ]
      }
    ],
    "practice": "Privilégiez === et !==. Convertissez au bord de votre programme, notamment après une saisie utilisateur ou la lecture de données externes.",
    "era": "ES6+",
    "kind": "Fondamentaux",
    "legacy": {
      "text": "== existe toujours et effectue des conversions implicites. Sachez le reconnaître sans l’utiliser par réflexe.",
      "code": "'4' == 4;  // true\n'4' === 4; // false"
    },
    "startingPoint": "Le texte \"4\" et le nombre 4 se ressemblent à l’écran, mais ne se calculent pas de la même façon. Les champs de formulaire fournissent du texte : on le convertit explicitement avant un calcul. Une comparaison répond toujours par true ou false.",
    "terms": [
      {
        "word": "conversion",
        "meaning": "Transformation d’une valeur d’un type vers un autre."
      },
      {
        "word": "comparaison stricte",
        "meaning": "=== vérifie la valeur et le type sans conversion implicite."
      },
      {
        "word": "NaN",
        "meaning": "Résultat numérique invalide, par exemple Number(\"quatre\")."
      }
    ]
  },
  {
    "id": "conditions",
    "group": "Fondations",
    "title": "Faire des choix avec les conditions",
    "lead": "Un programme ne fait pas toujours la même chose. Une condition lui permet de choisir une action selon une valeur.",
    "mental": "Une condition est une question dont la réponse vaut true ou false. Si elle est vraie, le bloc if s’exécute ; sinon, on peut exécuter le bloc else. Plusieurs cas peuvent être traités avec else if ou switch.",
    "syntaxIntro": "Lisez d’abord la question entre parenthèses, puis le code entre accolades. Les accolades délimitent un bloc. Le ternaire est une écriture courte pour choisir une valeur simple.",
    "syntax": "const joueurs = 3;\nif (joueurs >= 4) {\n  console.log('Équipe complète');\n} else if (joueurs >= 2) {\n  console.log('Équipe en formation');\n} else {\n  console.log('Il manque des joueurs');\n}",
    "examples": [
      {
        "title": "if / else if / else",
        "code": "const joueurs = 3;\nif (joueurs >= 4) {\n  console.log('Complète');\n} else if (joueurs >= 2) {\n  console.log('En formation');\n} else {\n  console.log('Insuffisante');\n}",
        "output": "En formation",
        "explain": "La première question est fausse. La seconde est vraie : ce bloc s’exécute, puis le programme sort de la chaîne de conditions.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "joueurs vaut 3 : le premier test 3 >= 4 est faux.",
          "Le second test 3 >= 2 est vrai : En formation s’affiche. Le else final n’est pas exécuté."
        ]
      },
      {
        "title": "switch : plusieurs valeurs possibles",
        "code": "const mode = 'duo';\nswitch (mode) {\n  case 'solo':\n    console.log('1 joueur');\n    break;\n  case 'duo':\n    console.log('2 joueurs');\n    break;\n  default:\n    console.log('Mode inconnu');\n}",
        "output": "2 joueurs",
        "explain": "switch compare mode à chaque case. break arrête le switch après le bon cas. default sert si aucun cas ne correspond.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "mode contient duo, donc la case solo ne correspond pas.",
          "La case duo affiche 2 joueurs. break quitte le switch avant le cas default."
        ]
      },
      {
        "title": "Le ternaire : choisir une valeur",
        "code": "const score = 78;\nconst rang = score >= 80 ? 'élite' : 'amateur';\nconsole.log(rang);",
        "output": "amateur",
        "explain": "La condition est fausse, donc la valeur après : est choisie. Préférez if lorsque plusieurs actions doivent être exécutées.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "78 >= 80 est faux : la partie après le point d’interrogation n’est pas choisie.",
          "La partie après les deux-points donne amateur, qui est rangé dans rang puis affiché."
        ]
      }
    ],
    "practice": "Commencez par if / else pour un choix clair. Utilisez switch quand vous comparez une même valeur à plusieurs possibilités, et un ternaire pour une seule valeur courte.",
    "era": "Fondamentaux JS",
    "kind": "Contrôle du programme",
    "legacy": null,
    "startingPoint": "Une condition pose une question comme « reste-t-il des places ? ». Le programme exécute un bloc si la réponse est vraie, puis continue après ce bloc. Les autres branches ne s’exécutent pas lorsqu’une première branche correspond.",
    "terms": [
      {
        "word": "booléen",
        "meaning": "Une valeur qui vaut true ou false."
      },
      {
        "word": "bloc",
        "meaning": "Instructions entre accolades { }."
      },
      {
        "word": "branche",
        "meaning": "Chemin choisi par une condition."
      }
    ]
  },
  {
    "id": "boucles",
    "group": "Fondations",
    "title": "Répéter avec les boucles",
    "lead": "Une boucle exécute plusieurs fois des instructions. Elle peut compter, continuer tant qu’une condition est vraie ou parcourir une liste.",
    "mental": "Pour comprendre une boucle, cherchez trois choses : son point de départ, la condition qui autorise un nouveau tour et ce qui change à chaque tour. Si rien ne fait devenir la condition fausse, la boucle peut ne jamais s’arrêter.",
    "syntaxIntro": "for est pratique quand on connaît le nombre de tours. while teste avant chaque tour ; do...while teste après le premier. for...of parcourt des valeurs et for...in parcourt des clés. break arrête la boucle et continue passe au tour suivant.",
    "syntax": "for (let numero = 1; numero <= 3; numero++) {\n  console.log(numero);\n}\n// Départ : 1. Continuer jusqu’à 3. Ajouter 1 après chaque tour.",
    "examples": [
      {
        "title": "for : compter",
        "code": "for (let manche = 1; manche <= 3; manche++) {\n  console.log(`Manche ${manche}`);\n}",
        "output": "Manche 1\nManche 2\nManche 3",
        "explain": "let manche = 1 initialise le compteur. manche <= 3 est vérifié avant chaque tour. manche++ ajoute 1 après le bloc.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "Avant le premier tour, manche vaut 1 ; le test 1 <= 3 est vrai.",
          "Après chaque affichage, manche++ ajoute 1. Quand manche atteint 4, le test est faux et la boucle s’arrête."
        ]
      },
      {
        "title": "while : tester avant chaque tour",
        "code": "let places = 3;\nwhile (places > 0) {\n  console.log(`Place ${places}`);\n  places--;\n}",
        "output": "Place 3\nPlace 2\nPlace 1",
        "explain": "Le test est effectué avant le bloc. places-- diminue le nombre à chaque tour ; la boucle s’arrête lorsque places vaut 0.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "places commence à 3. Avant chaque tour, la boucle vérifie que places est supérieur à zéro.",
          "Chaque places-- retire 1. Après avoir affiché 1, places vaut 0 : aucun nouveau tour ne démarre."
        ]
      },
      {
        "title": "do...while : faire au moins un tour",
        "code": "let essais = 0;\ndo {\n  essais++;\n  console.log(`Essai ${essais}`);\n} while (essais < 1);",
        "output": "Essai 1",
        "explain": "Le corps de la boucle s’exécute avant le premier test, même si la condition devient immédiatement fausse.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "Le bloc do commence sans tester la condition : essais passe de 0 à 1 et affiche Essai 1.",
          "Le test 1 < 1 est faux ; la boucle se termine. C’est pourquoi elle a fait exactement un tour."
        ]
      },
      {
        "title": "for...of : valeurs d’un tableau",
        "code": "const joueurs = ['Maya', 'Noa', 'Lina'];\nfor (const joueur of joueurs) {\n  console.log(joueur);\n}",
        "output": "Maya\nNoa\nLina",
        "explain": "À chaque tour, joueur reçoit le prochain nom du tableau. Il n’y a pas besoin de gérer un indice.",
        "context": "ES6",
        "walkthrough": [
          "joueurs est un tableau de trois noms. for...of prend sa première valeur, Maya.",
          "Le même bloc recommence avec Noa puis Lina, puis la boucle se termine faute d’autres valeurs."
        ]
      },
      {
        "title": "for...in : clés d’un objet",
        "code": "const equipe = { nom: 'Orion', joueurs: 3 };\nfor (const cle in equipe) {\n  console.log(`${cle} : ${equipe[cle]}`);\n}",
        "output": "nom : Orion\njoueurs : 3",
        "explain": "La boucle fournit nom puis joueurs, qui sont des clés. La notation equipe[cle] lit la valeur associée. Pour les valeurs d’un tableau, préférez for...of.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "for...in fournit d’abord la clé nom, puis la clé joueurs.",
          "equipe[cle] utilise chaque clé pour retrouver sa valeur : Orion, puis 3."
        ]
      },
      {
        "title": "break et continue",
        "code": "for (let nombre = 1; nombre <= 5; nombre++) {\n  if (nombre === 2) continue;\n  if (nombre === 4) break;\n  console.log(nombre);\n}",
        "output": "1\n3",
        "explain": "À 2, continue saute l’affichage et passe au tour suivant. À 4, break met fin à toute la boucle.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "Au tour 1, aucun test ne détourne le programme : 1 s’affiche. Au tour 2, continue passe directement au tour 3.",
          "3 s’affiche. Au tour 4, break arrête la boucle : 4 et 5 ne sont pas affichés."
        ]
      }
    ],
    "practice": "Vérifiez toujours que le compteur progresse vers l’arrêt. Utilisez for...of pour les valeurs d’un tableau ; for...in concerne surtout les clés d’un objet. map et filter restent plus expressifs pour produire un nouveau tableau.",
    "era": "Fondamentaux JS + ES6",
    "kind": "Contrôle du programme",
    "legacy": {
      "text": "for, while et do...while existaient avant ES6. En code moderne, utilisez let pour le compteur plutôt que var.",
      "code": "for (var i = 0; i < 3; i++) { /* ancien compteur var */ }\nfor (let i = 0; i < 3; i++) { /* portée de bloc */ }"
    },
    "startingPoint": "Si vous deviez afficher les noms de dix joueurs, écrire dix fois console.log serait répétitif. Une boucle relance le même bloc en changeant une valeur à chaque tour. Avant de la lire, repérez son départ, sa condition d’arrêt et sa progression.",
    "terms": [
      {
        "word": "itération",
        "meaning": "Un passage dans la boucle."
      },
      {
        "word": "compteur",
        "meaning": "Variable qui change à chaque tour, souvent un nombre."
      },
      {
        "word": "condition d’arrêt",
        "meaning": "Test qui finit par devenir faux pour terminer la boucle."
      }
    ]
  },
  {
    "id": "fonctions",
    "group": "Fondations",
    "title": "Fonctions et paramètres",
    "lead": "Une fonction rassemble un comportement réutilisable. Ses paramètres sont les entrées ; return fournit la sortie au code qui l’appelle.",
    "mental": "Imaginez une petite machine : vous lui donnez des arguments, elle applique une règle, puis rend une valeur. Sans return, le résultat de l’appel est undefined.",
    "syntaxIntro": "Commencez par définir une fonction avec function, puis appelez-la avec des parenthèses. La flèche est une autre écriture utile ; les valeurs par défaut et ...rest viennent ensuite.",
    "syntax": "function calculerTotal(prix, quantite = 1) {\n  return prix * quantite;\n}\nconst doubler = (nombre) => nombre * 2;\nfunction additionner(...nombres) {\n  return nombres.reduce((total, n) => total + n, 0);\n}",
    "examples": [
      {
        "title": "Définir puis appeler une fonction",
        "code": "function doubler(nombre) {\n  return nombre * 2;\n}\nconst resultat = doubler(4);\nconsole.log(resultat);",
        "output": "8",
        "explain": "La définition ne calcule rien tant que la fonction n’est pas appelée. doubler(4) passe 4 dans nombre puis renvoie 8.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "La fonction est définie avec le paramètre nombre. La ligne return décrit ce qu’elle doit renvoyer.",
          "L’appel doubler(4) donne 4 à nombre ; 4 × 2 vaut 8, qui est affiché."
        ]
      },
      {
        "title": "Calcul réutilisable",
        "code": "const calculerPlaces = (equipes, joueursParEquipe = 3) => {\n  return equipes * joueursParEquipe;\n};\nconsole.log(calculerPlaces(4));",
        "output": "12",
        "explain": "Le second argument est facultatif : la valeur 3 s’applique uniquement si l’argument est absent ou undefined.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "La fonction reçoit 4 comme nombre d’équipes. Aucun second argument n’est donné : le défaut 3 est utilisé.",
          "return calcule 4 × 3 et renvoie 12 à console.log."
        ]
      },
      {
        "title": "Paramètres rest",
        "code": "const total = (...scores) => scores.reduce((somme, score) => somme + score, 0);\nconsole.log(total(8, 12, 5));",
        "output": "25",
        "explain": "...scores regroupe tous les arguments dans un tableau. reduce accumule la somme.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "Les trois arguments 8, 12 et 5 sont rassemblés dans le tableau scores.",
          "reduce part de zéro et additionne les valeurs une à une : 0 + 8 + 12 + 5 = 25."
        ]
      }
    ],
    "practice": "Donnez à une fonction une responsabilité claire et retournez un résultat plutôt que de dépendre d’une variable globale. Gardez la fonction classique quand le comportement de this importe.",
    "era": "ES6+",
    "kind": "Fondamentaux",
    "legacy": {
      "text": "Une fonction anonyme passée en argument était souvent écrite avec function. La flèche est plus concise, mais son this fonctionne différemment.",
      "code": "scores.map(function (score) { return score * 2; });\nscores.map((score) => score * 2);"
    },
    "startingPoint": "Une fonction est une suite d’instructions à laquelle on donne un nom. On peut l’appeler plusieurs fois avec des données différentes. Un paramètre est le nom de la donnée reçue ; un argument est la valeur passée lors de l’appel.",
    "terms": [
      {
        "word": "appeler",
        "meaning": "Exécuter une fonction."
      },
      {
        "word": "paramètre",
        "meaning": "Nom inscrit dans la définition de la fonction."
      },
      {
        "word": "return",
        "meaning": "Mot-clé qui renvoie une valeur et termine la fonction."
      }
    ]
  },
  {
    "id": "portee-closures",
    "group": "Fondations",
    "title": "Portée, hoisting et closures",
    "lead": "Le bloc, la fonction et le module déterminent où une variable est visible. Une closure permet à une fonction de conserver l’accès aux variables de sa portée de création.",
    "mental": "Une fonction emporte avec elle l’environnement lexical où elle a été créée. La pile d’appels suit les appels en cours ; elle se vide lorsque les fonctions se terminent.",
    "syntaxIntro": "let et const ont une portée de bloc. Leur déclaration est connue avant la ligne d’initialisation, mais la lecture préalable déclenche une erreur.",
    "syntax": "function creerCompteur() {\n  let valeur = 0;\n  return () => ++valeur;\n}\n\nconst compteur = creerCompteur();",
    "examples": [
      {
        "title": "Une closure garde son état",
        "code": "function creerCompteur() {\n  let valeur = 0;\n  return () => ++valeur;\n}\nconst prochain = creerCompteur();\nconsole.log(prochain(), prochain());",
        "output": "1 2",
        "explain": "La variable valeur reste accessible à la fonction retournée, sans devenir une variable globale.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "creerCompteur crée valeur à zéro et renvoie une autre fonction.",
          "Chaque appel à prochain retrouve cette même valeur, l’augmente et renvoie 1 puis 2."
        ]
      },
      {
        "title": "Portée de bloc",
        "code": "if (true) {\n  const message = 'dans le bloc';\n  console.log(message);\n}\n// console.log(message); // ReferenceError",
        "output": "dans le bloc",
        "explain": "En dehors des accolades, message n’existe pas. La ligne commentée produirait une ReferenceError.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "message est créé entre les accolades du if et peut être affiché à cet endroit.",
          "La ligne commentée serait à l’extérieur du bloc : elle ne pourrait plus accéder à message."
        ]
      }
    ],
    "practice": "Déclarez les variables au plus près de leur usage. Évitez les variables globales et ne comptez pas sur le hoisting pour rendre un code difficile à suivre.",
    "era": "ES6+",
    "kind": "Fondamentaux",
    "legacy": {
      "text": "var est visible dans toute sa fonction, même lorsqu’il est déclaré dans un bloc if.",
      "code": "if (true) { var ancien = 1; }\nconsole.log(ancien); // 1"
    },
    "startingPoint": "Une variable créée à l’intérieur d’un bloc ou d’une fonction n’est pas visible partout. Cette limite s’appelle la portée. Une fonction créée à l’intérieur d’une autre peut garder accès aux variables qui existaient lors de sa création.",
    "terms": [
      {
        "word": "portée",
        "meaning": "Partie du code où un nom est accessible."
      },
      {
        "word": "closure",
        "meaning": "Fonction qui conserve l’accès à son environnement de création."
      },
      {
        "word": "pile d’appels",
        "meaning": "Liste des fonctions en cours d’exécution."
      }
    ]
  },
  {
    "id": "chaines-nombres",
    "group": "Données",
    "title": "Chaînes et nombres",
    "lead": "Les template literals rendent les textes dynamiques lisibles. Les méthodes de chaînes et de nombres aident à traiter des données sans réinventer des règles fragiles.",
    "mental": "Les chaînes sont immuables : une méthode produit une nouvelle chaîne. Les calculs en number utilisent une représentation flottante, ce qui peut créer des imprécisions.",
    "syntaxIntro": "Utilisez les accents graves pour interpoler, trim pour retirer les espaces de bord, includes pour rechercher, et Intl.NumberFormat pour l’affichage.",
    "syntax": "const pseudo = '  Maya  '.trim();\nconst message = `Bienvenue, ${pseudo} !`;\nconst prix = new Intl.NumberFormat('fr-FR', {\n  style: 'currency', currency: 'EUR'\n}).format(19.9);",
    "examples": [
      {
        "title": "Construire un message",
        "code": "const equipe = 'Orion';\nconst manches = 3;\nconsole.log(`${equipe} joue ${manches} manches.`);\nconsole.log('  Orion  '.trim().toLowerCase());",
        "output": "Orion joue 3 manches.\norion",
        "explain": "L’interpolation évalue les expressions entre ${...}. trim et toLowerCase retournent une nouvelle chaîne.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "Le texte entre accents graves insère les valeurs de equipe et manches dans une phrase.",
          "trim retire les espaces autour de Orion ; toLowerCase crée ensuite le texte orion."
        ]
      },
      {
        "title": "Précision des nombres",
        "code": "console.log(0.1 + 0.2 === 0.3);\nconsole.log(Math.round((0.1 + 0.2) * 100) / 100);",
        "output": "false\n0.3",
        "explain": "Les décimaux flottants ne représentent pas toujours exactement 0,1 et 0,2. Pour de l’argent, utilisez une unité entière adaptée, par exemple les centimes.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "Le calcul 0.1 + 0.2 subit une petite approximation de représentation : la comparaison exacte est fausse.",
          "Multiplier puis arrondir et diviser affiche 0.3 pour cet exemple ; les montants monétaires exigent une stratégie adaptée."
        ]
      }
    ],
    "practice": "Utilisez Intl pour présenter des nombres selon une locale et conservez des valeurs numériques pour calculer. N’utilisez pas toFixed comme solution universelle aux calculs monétaires.",
    "era": "ES6+",
    "kind": "Fondamentaux",
    "legacy": {
      "text": "Avant les template literals, la concaténation avec + était courante.",
      "code": "'Bienvenue, ' + pseudo + ' !';\n`Bienvenue, ${pseudo} !`;"
    },
    "startingPoint": "Une chaîne est du texte entre guillemets ou accents graves. Un nombre sert aux calculs. Une méthode de chaîne transforme ou examine le texte et renvoie généralement une nouvelle valeur.",
    "terms": [
      {
        "word": "template literal",
        "meaning": "Texte entre accents graves permettant d’insérer une expression."
      },
      {
        "word": "méthode",
        "meaning": "Fonction appelée sur une valeur avec un point."
      },
      {
        "word": "flottant",
        "meaning": "Représentation des nombres décimaux, parfois approximative."
      }
    ]
  },
  {
    "id": "tableaux",
    "group": "Données",
    "title": "Tableaux et méthodes",
    "lead": "Les tableaux représentent des listes ordonnées. map transforme, filter sélectionne, find récupère un élément et reduce agrège.",
    "mental": "Chaque méthode répond à une question différente : un tableau de même longueur, un sous-ensemble, une seule valeur ou une accumulation. Cette intention est plus claire qu’une boucle générique.",
    "syntaxIntro": "Commencez par les crochets, les indices et length. push/pop modifient le tableau. map, filter, find et reduce apportent ensuite des transformations et des recherches plus expressives.",
    "syntax": "const joueurs = ['Maya', 'Noa'];\nconsole.log(joueurs[0]);      // Maya\nconsole.log(joueurs.length);  // 2\nconst nomsMajuscules = joueurs.map((nom) => nom.toUpperCase());",
    "examples": [
      {
        "title": "Lire un élément et la longueur",
        "code": "const joueurs = ['Maya', 'Noa', 'Lina'];\nconsole.log(joueurs[0]);\nconsole.log(joueurs.length);",
        "output": "Maya\n3",
        "explain": "Les indices commencent à zéro : [0] lit le premier nom. length indique le nombre d’éléments.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "Le tableau contient trois valeurs dans un ordre donné.",
          "L’indice 0 pointe sur Maya ; length compte trois entrées."
        ]
      },
      {
        "title": "Ajouter et retirer une valeur",
        "code": "const joueurs = ['Maya', 'Noa'];\njoueurs.push('Lina');\nconsole.log(joueurs);\nconst dernier = joueurs.pop();\nconsole.log(dernier, joueurs.length);",
        "output": "[\"Maya\", \"Noa\", \"Lina\"]\nLina 2",
        "explain": "push ajoute à la fin ; pop retire et renvoie le dernier élément. Ces méthodes modifient le tableau d’origine.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "push ajoute Lina au tableau initial : il contient alors trois noms.",
          "pop retire Lina et renvoie ce nom ; il reste deux éléments."
        ]
      },
      {
        "title": "Transformer et filtrer",
        "code": "const joueurs = [\n  { nom: 'Maya', points: 18 },\n  { nom: 'Noa', points: 7 },\n  { nom: 'Lina', points: 12 }\n];\nconst qualifies = joueurs.filter((j) => j.points >= 10).map((j) => j.nom);\nconsole.log(qualifies);",
        "output": "[\"Maya\", \"Lina\"]",
        "explain": "filter garde Maya et Lina ; map extrait ensuite leur nom. Les deux étapes produisent de nouveaux tableaux.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "filter appelle sa fonction pour chaque joueur et conserve ceux qui ont au moins 10 points.",
          "map reçoit les deux joueurs gardés et renvoie seulement leurs noms, dans un nouveau tableau."
        ]
      },
      {
        "title": "Chercher, tester, accumuler",
        "code": "const scores = [12, 7, 18];\nconsole.log(scores.find((s) => s > 15));\nconsole.log(scores.some((s) => s < 10));\nconsole.log(scores.every((s) => s > 0));\nconsole.log(scores.reduce((total, s) => total + s, 0));",
        "output": "18\ntrue\ntrue\n37",
        "explain": "find renvoie une valeur ou undefined ; some et every renvoient un booléen ; reduce calcule ici un total.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "find retourne le premier score supérieur à 15 ; some et every répondent par un booléen.",
          "reduce part de 0 et ajoute 12, puis 7, puis 18 : le total vaut 37."
        ]
      }
    ],
    "practice": "Choisissez la méthode selon le résultat voulu. Pour des nombres, fournissez un comparateur à sort : [...scores].sort((a, b) => a - b).",
    "era": "ES6+",
    "kind": "Fondamentaux",
    "legacy": {
      "text": "Les boucles for avec un tableau résultat manuel restent fréquentes dans l’ancien code.",
      "code": "var doubles = [];\nfor (var i = 0; i < scores.length; i++) {\n  doubles.push(scores[i] * 2);\n}"
    },
    "startingPoint": "Un tableau est une liste ordonnée de valeurs. Le premier élément se trouve à l’indice 0. On peut le parcourir, obtenir une nouvelle liste transformée, garder certains éléments ou calculer un total.",
    "terms": [
      {
        "word": "indice",
        "meaning": "Position d’un élément dans un tableau, à partir de 0."
      },
      {
        "word": "callback",
        "meaning": "Fonction transmise à une autre fonction, appelée pour chaque élément."
      },
      {
        "word": "mutation",
        "meaning": "Modification de la valeur ou du tableau d’origine."
      }
    ]
  },
  {
    "id": "objets",
    "group": "Données",
    "title": "Objets, destructuration et spread",
    "lead": "Un objet regroupe des propriétés nommées. La destructuration extrait des valeurs ; spread aide à créer une nouvelle structure à partir d’une ancienne.",
    "mental": "L’objet décrit une entité. Deux variables peuvent référencer le même objet : modifier l’une peut alors être visible depuis l’autre. Le spread ne copie que le premier niveau.",
    "syntaxIntro": "Commencez par créer un objet et lire ses propriétés avec le point. Les crochets servent aussi à accéder à une clé choisie dynamiquement. Destructuration et spread viennent après.",
    "syntax": "const equipe = { nom: 'Orion', joueurs: 3 };\nconsole.log(equipe.nom);      // Orion\nconsole.log(equipe['joueurs']); // 3\nconst copie = { ...equipe, joueurs: 4 };",
    "examples": [
      {
        "title": "Lire et modifier une propriété",
        "code": "const equipe = { nom: 'Orion', joueurs: 3 };\nconsole.log(equipe.nom);\nequipe.joueurs = 4;\nconsole.log(equipe['joueurs']);",
        "output": "Orion\n4",
        "explain": "Le point lit une clé connue. Les crochets lisent une propriété dont le nom est donné par une chaîne ou une variable.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "L’objet possède deux propriétés nommées nom et joueurs. Le point lit la valeur Orion.",
          "La propriété joueurs reçoit 4 ; les crochets retrouvent ensuite cette valeur."
        ]
      },
      {
        "title": "Créer une version mise à jour",
        "code": "const equipe = { nom: 'Orion', joueurs: 3 };\nconst suivante = { ...equipe, joueurs: 4 };\nconsole.log(equipe.joueurs, suivante.joueurs);",
        "output": "3 4",
        "explain": "Le premier objet reste inchangé ; la propriété joueurs du nouvel objet prend la dernière valeur écrite.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "Le spread place les propriétés de equipe dans un nouvel objet.",
          "La propriété joueurs écrite ensuite remplace la copie de la valeur 3 par 4 ; l’objet de départ garde 3."
        ]
      },
      {
        "title": "La copie superficielle",
        "code": "const origine = { capitaine: { nom: 'Maya' } };\nconst copie = { ...origine };\ncopie.capitaine.nom = 'Noa';\nconsole.log(origine.capitaine.nom);",
        "output": "Noa",
        "explain": "Le spread copie la référence de l’objet capitaine. Pour des données imbriquées, copiez explicitement chaque niveau nécessaire.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "copie est un nouvel objet extérieur, mais sa propriété capitaine pointe vers le même objet imbriqué.",
          "Changer copie.capitaine.nom modifie donc aussi le nom observé depuis origine."
        ]
      }
    ],
    "practice": "Ne confondez pas nouveau contenant et copie profonde. Pour un accès dynamique, utilisez objet[cle] ; pour une clé connue, préférez objet.propriete.",
    "era": "ES6+",
    "kind": "Fondamentaux",
    "legacy": {
      "text": "Avant la destructuration, on extrayait les propriétés une par une.",
      "code": "var nom = equipe.nom;\nconst { nom } = equipe;"
    },
    "startingPoint": "Un objet regroupe des informations sur une même chose. Chaque information porte une clé : dans equipe.nom, nom est la clé. Plusieurs variables peuvent viser le même objet ; changer une propriété peut alors être visible des deux côtés.",
    "terms": [
      {
        "word": "propriété",
        "meaning": "Valeur enregistrée sous une clé dans un objet."
      },
      {
        "word": "référence",
        "meaning": "Lien vers un objet partagé, plutôt qu’une copie de toutes ses données."
      },
      {
        "word": "destructuration",
        "meaning": "Syntaxe pour extraire plusieurs propriétés dans des variables."
      }
    ]
  },
  {
    "id": "collections",
    "group": "Données",
    "title": "Map et Set",
    "lead": "Map associe des clés à des valeurs ; Set conserve des valeurs uniques. Ces collections résolvent des cas où objet et tableau sont moins explicites.",
    "mental": "Un Set agit comme un filtre de doublons. Une Map garde des associations et accepte notamment des clés qui ne sont pas des chaînes.",
    "syntaxIntro": "new Set(iterable) et new Map(entrées) créent des collections. Utilisez add/has pour Set, set/get/has pour Map.",
    "syntax": "const idsUniques = new Set([1, 2, 2]);\nconst scores = new Map([['Maya', 18]]);\nscores.set('Noa', 12);",
    "examples": [
      {
        "title": "Supprimer les doublons",
        "code": "const jeux = ['Arena', 'Rush', 'Arena'];\nconsole.log([...new Set(jeux)]);",
        "output": "[\"Arena\", \"Rush\"]",
        "explain": "Set garde une seule occurrence de chaque chaîne. Le spread retransforme la collection en tableau.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "Le tableau contient deux fois Arena. Set conserve chaque valeur une seule fois.",
          "Le spread transforme à nouveau le Set en tableau pour obtenir Arena puis Rush."
        ]
      },
      {
        "title": "Associer clé et valeur",
        "code": "const scores = new Map();\nscores.set('Maya', 18);\nscores.set('Noa', 12);\nconsole.log(scores.get('Maya'), scores.has('Lina'));",
        "output": "18 false",
        "explain": "get récupère la valeur d’une clé ; has vérifie sa présence. Une clé absente donne undefined avec get.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "set associe les noms à leurs scores, sans imposer des positions comme dans un tableau.",
          "get retrouve 18 pour Maya ; has indique que Lina n’a pas de clé."
        ]
      }
    ],
    "practice": "Utilisez Set pour l’unicité et Map pour des associations dynamiques. Ne remplacez pas systématiquement un objet métier simple par une Map.",
    "era": "ES6+",
    "kind": "Fondamentaux",
    "legacy": null,
    "startingPoint": "Un tableau est idéal pour une liste ordonnée, mais pas pour tous les besoins. Set garde chaque valeur une seule fois. Map associe chaque clé à une valeur, comme un répertoire.",
    "terms": [
      {
        "word": "Set",
        "meaning": "Collection de valeurs uniques."
      },
      {
        "word": "Map",
        "meaning": "Collection de paires clé-valeur."
      },
      {
        "word": "clé",
        "meaning": "Valeur utilisée pour retrouver une autre valeur dans une Map."
      }
    ]
  },
  {
    "id": "this-classes",
    "group": "Données",
    "title": "this, prototypes et classes",
    "lead": "Les méthodes utilisent parfois this pour accéder à leur objet. Une classe fournit une syntaxe claire autour du système de prototypes de JavaScript.",
    "mental": "this dépend de la façon dont une fonction est appelée. Une méthode extraite de son objet peut perdre ce contexte. Les classes ne créent pas un nouveau modèle d’héritage : elles reposent sur les prototypes.",
    "syntaxIntro": "constructor initialise une instance ; les méthodes définies dans la classe sont partagées via le prototype. Une flèche capture le this du contexte extérieur.",
    "syntax": "class Equipe {\n  constructor(nom) { this.nom = nom; }\n  presenter() { return `Équipe ${this.nom}`; }\n}\nconst equipe = new Equipe('Orion');",
    "examples": [
      {
        "title": "Créer deux instances",
        "code": "class Equipe {\n  constructor(nom) { this.nom = nom; }\n  presenter() { return `Équipe ${this.nom}`; }\n}\nconsole.log(new Equipe('Orion').presenter());",
        "output": "Équipe Orion",
        "explain": "La méthode presenter lit la propriété nom de l’instance qui l’appelle.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "new Equipe crée une instance et appelle constructor avec Orion.",
          "presenter utilise this.nom sur cette instance et renvoie Équipe Orion."
        ]
      },
      {
        "title": "Méthode et this",
        "code": "const equipe = { nom: 'Orion', afficher() { return this.nom; } };\nconsole.log(equipe.afficher());\nconst afficher = equipe.afficher;\nconsole.log(afficher.call({ nom: 'Nova' }));",
        "output": "Orion\nNova",
        "explain": "call fixe explicitement la valeur de this. Une fonction fléchée utilisée comme méthode n’aurait pas son propre this.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "L’appel equipe.afficher() place equipe dans this, donc la méthode lit Orion.",
          "call exécute la même fonction avec un autre this qui contient Nova."
        ]
      }
    ],
    "practice": "Évitez l’héritage complexe quand une composition de petites fonctions et objets suffit. Ne transformez pas automatiquement toutes les fonctions en flèches.",
    "era": "ES6+",
    "kind": "Fondamentaux",
    "legacy": {
      "text": "L’ancienne écriture constructeur et prototype peut apparaître dans des bibliothèques historiques.",
      "code": "function Equipe(nom) { this.nom = nom; }\nEquipe.prototype.presenter = function () { return this.nom; };"
    },
    "startingPoint": "Une classe sert de modèle pour créer plusieurs objets de même forme. Chaque objet créé est une instance. Dans une méthode appelée par une instance, this désigne cette instance.",
    "terms": [
      {
        "word": "classe",
        "meaning": "Modèle de création d’objets."
      },
      {
        "word": "instance",
        "meaning": "Objet particulier créé depuis une classe."
      },
      {
        "word": "méthode",
        "meaning": "Fonction attachée à un objet."
      },
      {
        "word": "prototype",
        "meaning": "Mécanisme par lequel des objets partagent des méthodes."
      }
    ]
  },
  {
    "id": "modules",
    "group": "Architecture",
    "title": "Modules et organisation",
    "lead": "Les modules séparent les responsabilités et rendent les dépendances visibles. Un fichier exporte une fonction, un autre l’importe.",
    "mental": "Un module est une pièce avec une interface publique. Le code intérieur reste privé tant qu’il n’est pas exporté ; les imports disent exactement ce qui est utilisé.",
    "syntaxIntro": "export nommé facilite les imports explicites. Dans le navigateur, utilisez des chemins relatifs avec extension .js.",
    "syntax": "// scores.js\nexport const doubler = (score) => score * 2;\n\n// main.js\nimport { doubler } from './scores.js';\nconsole.log(doubler(6));",
    "examples": [
      {
        "title": "Deux fichiers, une responsabilité",
        "code": "// scores.js\nexport function total(scores) {\n  return scores.reduce((somme, score) => somme + score, 0);\n}\n\n// main.js\nimport { total } from './scores.js';\nconsole.log(total([8, 12]));",
        "output": "20",
        "explain": "Cet exemple se répartit dans deux fichiers. L’import relie main.js à la fonction publique de scores.js.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "scores.js exporte la fonction total pour qu’un autre fichier puisse l’utiliser.",
          "main.js l’importe, l’appelle avec [8, 12] et affiche 20. Les deux parties doivent être dans leurs fichiers respectifs."
        ]
      },
      {
        "title": "Renommer un import",
        "code": "// scores.js\nexport const seuil = 10;\n\n// main.js\nimport { seuil as seuilQualification } from './scores.js';\nconsole.log(seuilQualification);",
        "output": "10",
        "explain": "as change le nom local sans modifier le nom exporté par le module.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "scores.js rend la valeur seuil disponible.",
          "main.js l’importe sous un autre nom local, puis affiche la valeur 10."
        ]
      }
    ],
    "practice": "Regroupez le code par responsabilité. Pour exécuter import/export directement dans un navigateur, utilisez un serveur local ou un outil de développement adapté ; les exemples restent lisibles dans ce lab sans cette étape.",
    "era": "ES6+",
    "kind": "Architecture",
    "legacy": {
      "text": "Les scripts classiques partageaient souvent des variables globales selon leur ordre de chargement.",
      "code": "<script src=\"scores.js\"></script>\n<script src=\"main.js\"></script>"
    },
    "startingPoint": "Quand un programme grandit, on sépare les responsabilités entre fichiers. Un module rend publiques certaines valeurs avec export. Un autre fichier les récupère avec import.",
    "terms": [
      {
        "word": "module",
        "meaning": "Fichier JavaScript avec ses propres noms et dépendances."
      },
      {
        "word": "export",
        "meaning": "Rend une valeur disponible pour d’autres modules."
      },
      {
        "word": "import",
        "meaning": "Récupère une valeur exportée depuis un autre fichier."
      }
    ]
  },
  {
    "id": "erreurs-debug",
    "group": "Architecture",
    "title": "Erreurs et débogage",
    "lead": "Une erreur peut venir de la syntaxe, d’une valeur inattendue ou d’une opération asynchrone. Le débogueur aide à observer l’état au moment où elle survient.",
    "mental": "try/catch intercepte une erreur lancée pendant l’exécution du bloc ; il ne répare pas automatiquement la cause. Une erreur de données doit être traitée explicitement.",
    "syntaxIntro": "throw crée une erreur ; catch reçoit l’erreur ; finally s’exécute à la fin. Dans les DevTools, posez un breakpoint et inspectez les variables.",
    "syntax": "function lireScore(valeur) {\n  const score = Number(valeur);\n  if (Number.isNaN(score)) throw new Error('Score invalide');\n  return score;\n}",
    "examples": [
      {
        "title": "Traiter une saisie invalide",
        "code": "try {\n  const score = Number('inconnu');\n  if (Number.isNaN(score)) throw new Error('Score invalide');\n  console.log(score);\n} catch (erreur) {\n  console.error(erreur.message);\n}",
        "output": "Erreur affichée : Score invalide",
        "explain": "Le test évite que NaN se propage dans les calculs. Le message conserve une raison exploitable.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "Number(\"inconnu\") produit NaN. Le test détecte cette valeur et throw crée une erreur.",
          "L’exécution quitte le bloc try ; catch reçoit l’erreur et affiche son message."
        ]
      },
      {
        "title": "finally",
        "code": "try {\n  console.log('Traitement');\n} finally {\n  console.log('Nettoyage');\n}",
        "output": "Traitement\nNettoyage",
        "explain": "finally convient à un nettoyage nécessaire quelle que soit l’issue du traitement.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "Le bloc try affiche Traitement. Aucune erreur ne survient.",
          "finally s’exécute quand même et affiche Nettoyage."
        ]
      }
    ],
    "practice": "Ne masquez pas une erreur avec un catch vide. Ajoutez du contexte utile, puis laissez l’erreur remonter si le code local ne peut pas réellement la gérer.",
    "era": "ES6+",
    "kind": "Qualité",
    "legacy": null,
    "startingPoint": "Une erreur indique qu’une instruction ne peut pas produire le résultat attendu. Il faut comprendre sa cause plutôt que la cacher. Un point d’arrêt dans les outils du navigateur permet de voir les valeurs au moment précis du problème.",
    "terms": [
      {
        "word": "exception",
        "meaning": "Erreur signalée pendant l’exécution."
      },
      {
        "word": "try/catch",
        "meaning": "Blocs qui tentent une opération et traitent son échec."
      },
      {
        "word": "point d’arrêt",
        "meaning": "Pause du programme pour inspecter les valeurs."
      }
    ]
  },
  {
    "id": "dom",
    "group": "Navigateur",
    "title": "Lire et modifier le DOM",
    "lead": "Le DOM représente la page sous forme d’éléments. JavaScript peut lire ces éléments et modifier leur contenu après leur création.",
    "mental": "Le HTML est transformé en arbre. querySelector cherche un nœud ; textContent modifie son texte. Une sélection manquante renvoie null.",
    "syntaxIntro": "Sélectionnez, vérifiez si nécessaire, créez les éléments avec createElement et insérez-les avec append. textContent traite l’entrée comme du texte.",
    "syntax": "const titre = document.querySelector('#titre');\nif (titre) titre.textContent = 'Tournois ouverts';\nconst ligne = document.createElement('li');\nligne.textContent = 'Velocity Rush';\ndocument.querySelector('#liste')?.append(ligne);",
    "examples": [
      {
        "title": "Afficher une liste",
        "code": "const jeux = ['Velocity Rush', 'Crystal Siege'];\nconst liste = document.querySelector('#liste');\nfor (const jeu of jeux) {\n  const ligne = document.createElement('li');\n  ligne.textContent = jeu;\n  liste.append(ligne);\n}",
        "output": "<ul id=\"liste\">\n  <li>Velocity Rush</li>\n  <li>Crystal Siege</li>\n</ul>",
        "explain": "Sur une page comportant <ul id=\"liste\"></ul>, chaque jeu crée un li distinct. Le ?. est un ajout postérieur à ES6 ; l’exemple vérifie ici seulement la liste supposée présente.",
        "context": "Navigateur / DOM",
        "walkthrough": [
          "Le tableau contient deux noms ; la boucle traite un nom à chaque tour.",
          "createElement crée un li et textContent lui donne son texte ; append le place dans la liste de la page."
        ]
      },
      {
        "title": "Éviter une injection HTML",
        "code": "const pseudo = '<img src=x onerror=alert(1)>';\nconst cible = document.querySelector('#pseudo');\ncible.textContent = pseudo;",
        "output": "Le texte « <img src=x onerror=alert(1)> » s’affiche littéralement.",
        "explain": "textContent ne traite pas cette entrée comme du HTML. Le contenu issu d’un utilisateur ne doit pas être inséré directement via innerHTML.",
        "context": "Navigateur / DOM",
        "walkthrough": [
          "pseudo contient des caractères ressemblant à une balise HTML, mais ce n’est qu’une chaîne.",
          "textContent les affiche comme texte au lieu de créer une image ou d’exécuter un attribut."
        ]
      }
    ],
    "practice": "Privilégiez textContent pour les données externes. Vérifiez null si l’élément peut être absent et évitez de rechercher le même élément à chaque tour de boucle.",
    "era": "API Web",
    "kind": "Navigateur",
    "legacy": null,
    "startingPoint": "Le navigateur transforme le HTML en arbre d’éléments appelé DOM. JavaScript peut trouver un élément, lire son contenu et le modifier. Une recherche peut renvoyer null si l’élément n’existe pas.",
    "terms": [
      {
        "word": "DOM",
        "meaning": "Représentation de la page HTML sous forme d’objets."
      },
      {
        "word": "sélecteur",
        "meaning": "Expression utilisée pour retrouver un élément de la page."
      },
      {
        "word": "textContent",
        "meaning": "Propriété qui lit ou écrit du texte sans interpréter du HTML."
      }
    ]
  },
  {
    "id": "evenements",
    "group": "Navigateur",
    "title": "Événements et délégation",
    "lead": "Un événement signale une action : clic, saisie, soumission, touche du clavier. addEventListener associe une réaction à un élément.",
    "mental": "Le navigateur envoie un objet événement au gestionnaire. L’événement peut remonter des enfants vers leurs parents : cette propagation permet la délégation.",
    "syntaxIntro": "Utilisez addEventListener avec une fonction. event.target est l’élément d’origine ; event.currentTarget est celui sur lequel le gestionnaire est attaché.",
    "syntax": "const bouton = document.querySelector('#ajouter');\nbouton.addEventListener('click', () => {\n  console.log('Ajout demandé');\n});",
    "examples": [
      {
        "title": "Réagir au clic",
        "code": "const bouton = document.querySelector('#ajouter');\nbouton.addEventListener('click', () => {\n  bouton.textContent = 'Ajouté';\n});",
        "output": "Après le clic, le bouton affiche « Ajouté ».",
        "explain": "Le gestionnaire ne s’exécute pas au chargement : il est appelé après le clic de la personne.",
        "context": "Navigateur / DOM",
        "walkthrough": [
          "addEventListener enregistre une fonction à appeler plus tard.",
          "Quand le bouton est cliqué, la fonction change son texte. Avant ce clic, rien n’a changé."
        ]
      },
      {
        "title": "Déléguer une liste",
        "code": "const liste = document.querySelector('#equipes');\nliste.addEventListener('click', (event) => {\n  const bouton = event.target.closest('button[data-id]');\n  if (!bouton || !liste.contains(bouton)) return;\n  console.log(bouton.dataset.id);\n});",
        "output": "Un clic sur <button data-id=\"orion\"> affiche « orion ».",
        "explain": "Un seul gestionnaire couvre les boutons présents et ceux ajoutés plus tard. La vérification contains évite de traiter un bouton extérieur.",
        "context": "Navigateur / DOM",
        "walkthrough": [
          "L’écouteur est sur la liste, mais le clic peut partir d’un bouton placé à l’intérieur.",
          "closest recherche le bouton pertinent ; dataset.id lit son identifiant même si le bouton a été ajouté après l’installation de l’écouteur."
        ]
      }
    ],
    "practice": "Ne remplacez pas l’attribut onclick depuis JavaScript. Ajoutez des gestionnaires ciblés et retirez-les lorsque des composants éphémères n’en ont plus besoin.",
    "era": "API Web",
    "kind": "Navigateur",
    "legacy": null,
    "startingPoint": "Le navigateur signale des actions comme un clic ou une saisie. On donne une fonction au navigateur pour qu’il l’appelle au bon moment. Un clic sur un enfant peut aussi être reçu par son parent.",
    "terms": [
      {
        "word": "événement",
        "meaning": "Signal décrivant une action ou un changement."
      },
      {
        "word": "écouteur",
        "meaning": "Fonction appelée lorsqu’un événement se produit."
      },
      {
        "word": "délégation",
        "meaning": "Gestion de plusieurs éléments depuis un parent commun."
      }
    ]
  },
  {
    "id": "formulaires",
    "group": "Navigateur",
    "title": "Formulaires et validation",
    "lead": "Les formulaires collectent des chaînes et peuvent être validés avant un traitement. Le navigateur offre déjà required, min et type=email.",
    "mental": "L’événement submit est déclenché par le bouton ou par Entrée. preventDefault interrompt la navigation pour traiter la saisie avec JavaScript.",
    "syntaxIntro": "Lisez les valeurs via FormData. Convertissez explicitement les nombres et affichez un message associé au formulaire.",
    "syntax": "formulaire.addEventListener('submit', (event) => {\n  event.preventDefault();\n  const donnees = new FormData(formulaire);\n  const nom = String(donnees.get('equipe') ?? '').trim();\n});",
    "examples": [
      {
        "title": "Vérifier une équipe",
        "code": "const formulaire = document.querySelector('#inscription');\nformulaire.addEventListener('submit', (event) => {\n  event.preventDefault();\n  const nom = String(new FormData(formulaire).get('equipe') ?? '').trim();\n  const retour = document.querySelector('#retour');\n  retour.textContent = nom.length >= 3 ? `Équipe : ${nom}` : 'Saisissez au moins 3 caractères.';\n});",
        "output": "Avec « Orion » : Équipe : Orion\nAvec « O » : Saisissez au moins 3 caractères.",
        "explain": "Le ?? gère une valeur absente. La chaîne est nettoyée puis sa longueur est contrôlée avant d’afficher un texte.",
        "context": "Navigateur / formulaire",
        "walkthrough": [
          "submit se déclenche après une validation du formulaire ; preventDefault empêche la navigation.",
          "FormData lit la valeur equipe, trim retire les espaces de bord, puis le test choisit le message affiché."
        ]
      },
      {
        "title": "Contrôle HTML intégré",
        "code": "<form id=\"inscription\">\n  <label>Adresse e-mail <input name=\"email\" type=\"email\" required></label>\n  <button type=\"submit\">Envoyer</button>\n</form>",
        "output": "Une adresse vide ou mal formée bloque la soumission.",
        "explain": "La validation HTML aide l’utilisateur, mais un serveur doit aussi vérifier les données reçues.",
        "context": "HTML + navigateur",
        "walkthrough": [
          "required et type=email sont des contraintes comprises directement par le navigateur.",
          "La soumission est refusée si l’adresse est vide ou mal formée ; le serveur doit aussi contrôler la donnée."
        ]
      }
    ],
    "practice": "Associez chaque champ à un label, donnez un retour lisible et ne considérez jamais la validation côté navigateur comme une validation de sécurité.",
    "era": "API Web",
    "kind": "Navigateur",
    "legacy": null,
    "startingPoint": "Un formulaire sert à recueillir des valeurs. Même un champ de nombre fournit souvent une chaîne quand on le lit avec JavaScript. Il faut contrôler les valeurs avant de les utiliser et indiquer clairement les erreurs.",
    "terms": [
      {
        "word": "submit",
        "meaning": "Événement de validation du formulaire."
      },
      {
        "word": "FormData",
        "meaning": "Objet qui lit les champs ayant un attribut name."
      },
      {
        "word": "validation",
        "meaning": "Vérification qu’une valeur respecte les règles attendues."
      }
    ]
  },
  {
    "id": "web-api",
    "group": "Navigateur",
    "title": "Stockage, URL et dates",
    "lead": "Les API Web complètent JavaScript : URL aide à construire des adresses, localStorage garde de petites préférences sur un appareil, Intl présente les dates.",
    "mental": "Les données de localStorage sont des chaînes et persistent dans ce navigateur. Une URLSearchParams encode les paramètres ; une date affichée dépend de la locale et du fuseau choisis.",
    "syntaxIntro": "Utilisez JSON.stringify/parse pour des objets stockés ; URL et URLSearchParams pour des adresses ; Intl.DateTimeFormat pour l’affichage.",
    "syntax": "const url = new URL('/tournois', location.origin);\nurl.searchParams.set('jeu', 'Crystal Siege');\nlocalStorage.setItem('theme', 'clair');",
    "examples": [
      {
        "title": "Paramètre d’URL sûr",
        "code": "const url = new URL('https://exemple.test/tournois');\nurl.searchParams.set('jeu', 'Crystal Siege');\nconsole.log(url.toString());",
        "output": "https://exemple.test/tournois?jeu=Crystal+Siege",
        "explain": "searchParams encode correctement l’espace et évite d’assembler l’URL à la main.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "new URL crée une adresse à partir d’une base valide.",
          "searchParams.set ajoute le paramètre jeu en encodant l’espace ; toString donne l’adresse finale."
        ]
      },
      {
        "title": "Une préférence locale",
        "code": "localStorage.setItem('affichage', 'compact');\nconsole.log(localStorage.getItem('affichage'));\nlocalStorage.removeItem('affichage');",
        "output": "compact",
        "explain": "Cette préférence n’est conservée que dans le navigateur de l’appareil. Elle ne doit pas porter un secret.",
        "context": "Navigateur / stockage",
        "walkthrough": [
          "setItem range la chaîne compact sous le nom affichage dans ce navigateur.",
          "getItem la relit, puis removeItem supprime cette préférence locale."
        ]
      }
    ],
    "practice": "N’enregistrez pas de secret dans localStorage. Pour les dates, stockez une donnée non ambiguë et spécifiez locale et fuseau lors de l’affichage.",
    "era": "API Web",
    "kind": "Navigateur",
    "legacy": null,
    "startingPoint": "Le navigateur fournit des outils qui ne font pas partie de la syntaxe du langage : ce sont des API Web. Une adresse peut contenir des paramètres, et une préférence peut être gardée localement sur un appareil.",
    "terms": [
      {
        "word": "API Web",
        "meaning": "Fonctionnalité mise à disposition par le navigateur."
      },
      {
        "word": "URL",
        "meaning": "Adresse d’une ressource ou d’une page."
      },
      {
        "word": "localStorage",
        "meaning": "Petit stockage local de chaînes de caractères dans le navigateur."
      }
    ]
  },
  {
    "id": "promesses",
    "group": "Asynchrone",
    "title": "Promesses et microtâches",
    "lead": "Une promesse représente un résultat futur : en attente, résolu ou rejeté. then reçoit une valeur ; catch traite un rejet.",
    "mental": "JavaScript continue d’exécuter le code synchrone pendant qu’une opération attend. Les réactions aux promesses sont planifiées en microtâches : elles s’exécutent après la pile synchrone en cours.",
    "syntaxIntro": "Promise.resolve construit une promesse déjà résolue. Une fonction asynchrone peut retourner une promesse. Un rejet sans traitement peut produire un avertissement.",
    "syntax": "const operation = Promise.resolve(12);\noperation\n  .then((valeur) => valeur * 2)\n  .then((resultat) => console.log(resultat))\n  .catch((erreur) => console.error(erreur));",
    "examples": [
      {
        "title": "Ordre d’exécution",
        "code": "console.log('A');\nPromise.resolve().then(() => console.log('C'));\nconsole.log('B');",
        "output": "A\nB\nC",
        "explain": "Le callback de then attend la fin du code synchrone. Une promesse résolue ne déclenche pas then immédiatement.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "A est affiché immédiatement. then planifie C pour après la suite du code synchrone.",
          "B s’affiche avant C, même si la promesse est déjà résolue."
        ]
      },
      {
        "title": "Chaîner une valeur",
        "code": "Promise.resolve(10)\n  .then((score) => score + 5)\n  .then((score) => console.log(score))\n  .catch((erreur) => console.error(erreur));",
        "output": "15",
        "explain": "La valeur retournée par un then est transmise au then suivant. Une exception dans la chaîne rejoint catch.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "La promesse commence avec 10 ; le premier then renvoie 15.",
          "Le second then reçoit 15 et l’affiche. catch ne s’exécute que si une étape échoue."
        ]
      }
    ],
    "practice": "Retournez la promesse depuis un then lorsque l’étape suivante doit attendre. Placez un traitement d’erreur au bon niveau et ne mélangez pas inutilement callbacks, then et await.",
    "era": "ES6",
    "kind": "Asynchrone",
    "legacy": {
      "text": "Les callbacks imbriqués apparaissent dans du code plus ancien et compliquent souvent la gestion des erreurs.",
      "code": "charger(function (erreur, resultat) {\n  if (erreur) return traiter(erreur);\n  continuer(resultat);\n});"
    },
    "startingPoint": "Certaines opérations prennent du temps, par exemple une requête réseau. JavaScript peut continuer pendant qu’il attend la réponse. Une promesse représente un résultat futur : il réussira ou échouera.",
    "terms": [
      {
        "word": "promesse",
        "meaning": "Objet qui représente une valeur disponible plus tard."
      },
      {
        "word": "résolution",
        "meaning": "Fin réussie d’une promesse."
      },
      {
        "word": "rejet",
        "meaning": "Fin en erreur d’une promesse."
      },
      {
        "word": "microtâche",
        "meaning": "Réaction planifiée après le code synchrone en cours."
      }
    ]
  },
  {
    "id": "async-await",
    "group": "Asynchrone",
    "title": "async / await",
    "lead": "async / await rend la lecture des promesses plus linéaire. await suspend la fonction asynchrone concernée, sans bloquer toute la page.",
    "mental": "Une fonction async retourne toujours une promesse, même lorsqu’elle retourne une simple valeur. await récupère sa résolution ou lance son erreur dans le bloc courant.",
    "syntaxIntro": "Déclarez async avant la fonction ; utilisez await sur une promesse et try/catch pour traiter les rejets.",
    "syntax": "async function chargerEquipe() {\n  try {\n    const equipe = await obtenirEquipe();\n    return equipe.nom;\n  } catch (erreur) {\n    console.error(erreur);\n    throw erreur;\n  }\n}",
    "examples": [
      {
        "title": "Attendre un résultat",
        "code": "async function obtenirScore() {\n  const score = await Promise.resolve(18);\n  return score + 2;\n}\nobtenirScore().then(console.log);",
        "output": "20",
        "explain": "Le return de la fonction async devient une promesse résolue avec 20.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "obtenirScore est async : son appel renvoie une promesse.",
          "await reçoit 18, puis return fournit 20 à la promesse ; then affiche 20."
        ]
      },
      {
        "title": "Traiter un rejet",
        "code": "async function afficher() {\n  try {\n    await Promise.reject(new Error('Indisponible'));\n  } catch (erreur) {\n    console.log(erreur.message);\n  }\n}\nafficher();",
        "output": "Indisponible",
        "explain": "Le rejet arrive dans catch comme une exception. La fonction affiche traite ici l’erreur localement.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "Promise.reject crée une promesse en erreur. await transmet cet échec au try/catch.",
          "catch lit le message Indisponible et l’affiche ; l’erreur a été traitée localement."
        ]
      }
    ],
    "practice": "N’utilisez pas await dans une boucle si les tâches sont indépendantes et pourraient démarrer ensemble. Pour ces cas, combinez Promise.all et await.",
    "era": "ES2017",
    "kind": "Asynchrone",
    "legacy": null,
    "startingPoint": "await attend le résultat d’une promesse à l’intérieur d’une fonction async. Le reste de la page peut continuer à fonctionner. Le code ressemble à une suite d’instructions, mais il demeure asynchrone.",
    "terms": [
      {
        "word": "async",
        "meaning": "Annonce qu’une fonction renvoie une promesse."
      },
      {
        "word": "await",
        "meaning": "Attend la résolution d’une promesse dans la fonction courante."
      },
      {
        "word": "rejet",
        "meaning": "Erreur qui peut être capturée avec try/catch."
      }
    ]
  },
  {
    "id": "promesses-paralleles",
    "group": "Asynchrone",
    "title": "Opérations parallèles",
    "lead": "Promise.all attend plusieurs opérations indépendantes. Promise.allSettled attend toutes leurs issues, même si certaines échouent.",
    "mental": "Démarrer les requêtes ensemble évite de payer chaque délai l’un après l’autre. all rejette dès qu’une promesse rejette ; allSettled donne un bilan individuel.",
    "syntaxIntro": "Placez les promesses dans un tableau. Le résultat de all garde l’ordre des entrées, pas l’ordre d’arrivée.",
    "syntax": "const [equipe, tournoi] = await Promise.all([\n  chargerEquipe(),\n  chargerTournoi()\n]);",
    "examples": [
      {
        "title": "Deux calculs indépendants",
        "code": "async function charger() {\n  const [a, b] = await Promise.all([\n    Promise.resolve('Orion'),\n    Promise.resolve('Velocity Rush')\n  ]);\n  console.log(`${a} · ${b}`);\n}\ncharger();",
        "output": "Orion · Velocity Rush",
        "explain": "Les opérations démarrent ensemble et leurs valeurs sont replacées dans l’ordre du tableau.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "Les deux promesses sont placées ensemble dans Promise.all et démarrent sans attendre l’une après l’autre.",
          "await reçoit leurs valeurs dans l’ordre d’entrée : a vaut Orion et b vaut Velocity Rush."
        ]
      },
      {
        "title": "Un échec partiel",
        "code": "Promise.allSettled([Promise.resolve(12), Promise.reject('hors ligne')])\n  .then((resultats) => console.log(resultats.map((r) => r.status)));",
        "output": "[\"fulfilled\", \"rejected\"]",
        "explain": "allSettled conserve les deux issues. Une promesse rejected expose reason ; une promesse fulfilled expose value.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "La première promesse réussit ; la seconde échoue.",
          "allSettled attend les deux et renvoie un objet par résultat ; map en extrait les statuts."
        ]
      }
    ],
    "practice": "Choisissez all quand toutes les réponses sont indispensables ; allSettled quand un résultat partiel reste utile. allSettled date d’après ES6.",
    "era": "ES6 + ES2020",
    "kind": "Asynchrone",
    "legacy": null,
    "startingPoint": "Deux tâches indépendantes peuvent démarrer en même temps. Si l’on attend la première avant de lancer la seconde, on perd du temps. Le choix entre all et allSettled dépend de ce que l’on fait si une tâche échoue.",
    "terms": [
      {
        "word": "concurrence",
        "meaning": "Plusieurs opérations en attente sur la même période."
      },
      {
        "word": "Promise.all",
        "meaning": "Attend tous les succès ou rejette dès un échec."
      },
      {
        "word": "Promise.allSettled",
        "meaning": "Attend chaque issue, réussie ou non."
      }
    ]
  },
  {
    "id": "fetch-http",
    "group": "Asynchrone",
    "title": "fetch, HTTP et JSON",
    "lead": "fetch envoie une requête HTTP et retourne une promesse de Response. Une erreur HTTP comme 404 ne rejette pas automatiquement cette promesse.",
    "mental": "Il y a deux étapes distinctes : recevoir la réponse HTTP, puis lire son corps. response.ok indique un statut 2xx ; response.json() est lui aussi asynchrone.",
    "syntaxIntro": "Vérifiez response.ok avant de lire le JSON, puis traitez séparément les erreurs réseau, HTTP et de format.",
    "syntax": "async function chargerTournois() {\n  const reponse = await fetch('/api/tournois');\n  if (!reponse.ok) {\n    throw new Error(`HTTP ${reponse.status}`);\n  }\n  return await reponse.json();\n}",
    "examples": [
      {
        "title": "GET avec contrôle du statut",
        "code": "async function chargerTournois() {\n  const reponse = await fetch('/api/tournois');\n  if (!reponse.ok) throw new Error(`HTTP ${reponse.status}`);\n  return await reponse.json();\n}\ntry {\n  console.log(await chargerTournois());\n} catch (erreur) {\n  console.error('Chargement impossible :', erreur.message);\n}",
        "output": "Si l’API répond 200 avec [{\"nom\":\"Orion\"}] : tableau contenant Orion.\nSi elle répond 404 : « Chargement impossible : HTTP 404 ».",
        "explain": "Le serveur /api/tournois est un exemple d’API à fournir dans un vrai projet ; cette page n’envoie aucune requête.",
        "context": "Navigateur / API HTTP",
        "walkthrough": [
          "fetch demande /api/tournois au serveur de l’exemple. La réponse possède un code HTTP.",
          "Si response.ok est faux, une erreur contenant le code est lancée ; sinon response.json lit le corps. try/catch affiche le résultat ou le problème."
        ]
      },
      {
        "title": "POST JSON",
        "code": "const reponse = await fetch('/api/inscriptions', {\n  method: 'POST',\n  headers: { 'Content-Type': 'application/json' },\n  body: JSON.stringify({ equipe: 'Orion' })\n});\nif (!reponse.ok) throw new Error(`HTTP ${reponse.status}`);",
        "output": "Une requête POST transporte {\"equipe\":\"Orion\"} en JSON.",
        "explain": "JSON.stringify convertit l’objet en texte JSON ; Content-Type décrit ce format au serveur. Vérifiez ensuite le statut.",
        "context": "Navigateur / API HTTP",
        "walkthrough": [
          "method POST indique l’envoi de données. JSON.stringify transforme l’objet en texte JSON.",
          "Le serveur reçoit le corps ; response.ok est contrôlé avant de considérer l’inscription comme réussie."
        ]
      }
    ],
    "practice": "Un serveur doit exister pour les URL illustrées. Ne supposez jamais que fetch rejette pour 404 ou 500. Affichez des messages utiles sans dévoiler des détails internes.",
    "era": "API Web",
    "kind": "Asynchrone",
    "legacy": null,
    "startingPoint": "Une page demande des données à un serveur avec une requête HTTP. Le serveur répond avec un statut et parfois des données. fetch renvoie la réponse, mais un statut 404 ou 500 doit être testé explicitement.",
    "terms": [
      {
        "word": "requête",
        "meaning": "Message envoyé au serveur."
      },
      {
        "word": "réponse",
        "meaning": "Message renvoyé par le serveur avec un statut."
      },
      {
        "word": "JSON",
        "meaning": "Format textuel courant pour échanger des données structurées."
      },
      {
        "word": "response.ok",
        "meaning": "Vaut true pour les statuts HTTP de succès, de 200 à 299."
      }
    ]
  },
  {
    "id": "fetch-avance",
    "group": "Asynchrone",
    "title": "Annulation et états réseau",
    "lead": "Une requête peut durer, échouer, être annulée ou terminer correctement. L’interface doit refléter ces états sans afficher une réponse devenue obsolète.",
    "mental": "AbortController produit un signal transmis à fetch. abort déclenche un rejet généralement nommé AbortError, que l’on distingue d’une panne réseau.",
    "syntaxIntro": "Créez un controller par opération annulable et passez son signal à fetch. Pour les délais, utilisez un signal de temporisation si votre environnement le prend en charge.",
    "syntax": "const controller = new AbortController();\nconst attente = fetch('/api/tournois', {\n  signal: controller.signal\n});\ncontroller.abort();",
    "examples": [
      {
        "title": "Annuler au changement de page",
        "code": "const controller = new AbortController();\ntry {\n  const reponse = await fetch('/api/tournois', { signal: controller.signal });\n  if (!reponse.ok) throw new Error(`HTTP ${reponse.status}`);\n  console.log(await reponse.json());\n} catch (erreur) {\n  if (erreur.name !== 'AbortError') console.error(erreur);\n}\n// Appeler controller.abort() quand la réponse ne sert plus.",
        "output": "Après abort(), aucune erreur utilisateur n’est affichée pour l’annulation.",
        "explain": "Cet extrait illustre le cycle : le contrôleur est créé, transmis puis annulé au moment approprié. L’URL exige un serveur réel.",
        "context": "Navigateur / API HTTP",
        "walkthrough": [
          "Le contrôleur fournit un signal à fetch ; la requête peut ensuite être interrompue par abort().",
          "Le rejet d’annulation est distingué par le nom AbortError, pour ne pas l’afficher comme une panne réseau."
        ]
      }
    ],
    "practice": "Affichez « chargement », « vide », « succès » et « erreur » selon l’état réel. Ne confondez pas une annulation volontaire avec une erreur à signaler.",
    "era": "API Web",
    "kind": "Asynchrone",
    "legacy": null,
    "startingPoint": "Une requête peut devenir inutile si la personne change de page ou relance une recherche. On peut alors l’annuler et éviter qu’un résultat ancien remplace le résultat récent.",
    "terms": [
      {
        "word": "AbortController",
        "meaning": "Objet permettant de demander l’annulation d’une opération."
      },
      {
        "word": "signal",
        "meaning": "Valeur transmise à fetch pour recevoir l’annulation."
      },
      {
        "word": "état réseau",
        "meaning": "Situation affichée : chargement, succès, vide, erreur ou annulation."
      }
    ]
  },
  {
    "id": "syntaxe-recente",
    "group": "Approfondir",
    "title": "Syntaxe récente après ES6",
    "lead": "Le code moderne emploie aussi des fonctionnalités arrivées après ES6. Il faut savoir les lire sans les attribuer à ES6.",
    "mental": "Ces opérateurs évitent des vérifications répétitives, mais ne remplacent pas la réflexion sur les valeurs absentes ni sur le comportement attendu.",
    "syntaxIntro": "?. s’arrête si la valeur vaut null ou undefined ; ?? fournit un défaut uniquement dans ces deux cas. Object.entries transforme un objet en paires.",
    "syntax": "const nom = equipe?.capitaine?.nom ?? 'Non désigné';\nconst places = donnees.places ?? 0;\nconst entrees = Object.entries({ a: 1, b: 2 });",
    "examples": [
      {
        "title": "Valeur absente et zéro",
        "code": "const equipe = { nom: 'Orion', places: 0 };\nconsole.log(equipe.capitaine?.nom ?? 'À nommer');\nconsole.log(equipe.places ?? 16);",
        "output": "À nommer\n0",
        "explain": "Le capitaine absent donne undefined, donc le libellé de remplacement. Zéro reste une valeur valide avec ??.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "equipe.capitaine est absent : ?. s’arrête et produit undefined au lieu de provoquer une erreur.",
          "?? remplace cette absence par À nommer ; il ne remplace pas places, car zéro est une valeur présente."
        ]
      },
      {
        "title": "Objets en entrées",
        "code": "const scores = { Maya: 12, Noa: 8 };\nconsole.log(Object.entries(scores));",
        "output": "[[\"Maya\", 12], [\"Noa\", 8]]",
        "explain": "Object.entries (ES2017) facilite le parcours des paires clé-valeur. Optional chaining et nullish coalescing sont ES2020.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "Object.entries reçoit un objet qui possède deux clés.",
          "Il renvoie un tableau de paires [clé, valeur], utile pour parcourir l’objet."
        ]
      }
    ],
    "practice": "Écrivez le défaut adapté au domaine : 0, chaîne vide et false ne signifient pas automatiquement « donnée manquante ». Vérifiez la cible d’exécution de votre projet.",
    "era": "ES2017–ES2020",
    "kind": "Syntaxe",
    "legacy": null,
    "startingPoint": "ES6 n’est pas la dernière version de JavaScript. Certaines écritures très courantes sont arrivées après. Ici, on les apprend séparément pour savoir ce que chaque symbole signifie.",
    "terms": [
      {
        "word": "?.",
        "meaning": "Accès qui s’arrête si la valeur de gauche est absente."
      },
      {
        "word": "??",
        "meaning": "Valeur de secours seulement pour null et undefined."
      },
      {
        "word": "valeur absente",
        "meaning": "Donnée manquante représentée ici par null ou undefined."
      }
    ]
  },
  {
    "id": "typescript-bases",
    "group": "TypeScript",
    "title": "Premiers types TypeScript",
    "lead": "TypeScript ajoute une analyse statique au JavaScript. Les annotations sont retirées à la compilation ; le navigateur exécute le JavaScript produit.",
    "mental": "Un type décrit les valeurs attendues avant l’exécution. Il réduit certaines erreurs de développement, sans valider magiquement les données reçues du réseau.",
    "syntaxIntro": "Annotez les entrées et sorties utiles. L’inférence évite de répéter des types évidents. Définissez les structures avec type ou interface.",
    "syntax": "type Joueur = { id: number; nom: string; points: number };\nfunction presenter(joueur: Joueur): string {\n  return `${joueur.nom} : ${joueur.points}`;\n}",
    "examples": [
      {
        "title": "Un contrat de fonction",
        "code": "type Equipe = { nom: string; joueurs: number };\nfunction afficher(equipe: Equipe): string {\n  return `${equipe.nom} (${equipe.joueurs})`;\n}\nconsole.log(afficher({ nom: 'Orion', joueurs: 3 }));",
        "output": "Orion (3)",
        "explain": "TypeScript signale pendant le développement un appel où joueurs serait une chaîne. Après compilation, les annotations disparaissent.",
        "context": "TypeScript (.ts)",
        "walkthrough": [
          "Le type Equipe indique que joueurs doit être un nombre ; afficher annonce qu’elle renvoie une chaîne.",
          "L’appel fournit le bon objet ; TypeScript vérifie l’écriture du programme, puis le JavaScript exécuté produit Orion (3)."
        ]
      },
      {
        "title": "Inférence et tableau",
        "code": "const scores = [12, 18, 7]; // number[] inféré\nconst qualifies = scores.filter((score) => score >= 10);\nconsole.log(qualifies);",
        "output": "[12, 18]",
        "explain": "Il n’est pas nécessaire de répéter number[] : TypeScript déduit le type à partir du tableau initial.",
        "context": "TypeScript (.ts)",
        "walkthrough": [
          "TypeScript déduit number[] à partir des trois nombres.",
          "filter garde 12 et 18 ; il n’est pas nécessaire d’ajouter une annotation à chaque ligne."
        ]
      }
    ],
    "practice": "Activez strict dans tsconfig.json. Évitez any par facilité ; utilisez unknown pour une valeur externe tant qu’elle n’est pas vérifiée.",
    "era": "TypeScript",
    "kind": "Typage",
    "legacy": null,
    "startingPoint": "TypeScript ajoute des indications de type au code pendant son développement. Un outil vérifie le code puis produit du JavaScript pour le navigateur. Les types n’existent plus dans le fichier exécuté.",
    "terms": [
      {
        "word": "annotation",
        "meaning": "Indication de type écrite dans le code source."
      },
      {
        "word": "compilation",
        "meaning": "Transformation du TypeScript en JavaScript."
      },
      {
        "word": "inférence",
        "meaning": "Type déduit automatiquement par l’outil."
      },
      {
        "word": "strict",
        "meaning": "Réglage qui renforce les vérifications de types."
      }
    ]
  },
  {
    "id": "typescript-avance",
    "group": "TypeScript",
    "title": "Unions, génériques et données externes",
    "lead": "Les unions modélisent plusieurs cas possibles ; les génériques conservent le lien entre le type d’une entrée et celui d’une sortie. Les données externes restent inconnues tant qu’elles ne sont pas vérifiées.",
    "mental": "Une réponse HTTP n’est pas fiable simplement parce qu’une variable porte un type. Le contrôle à l’exécution protège la frontière entre le monde externe et le programme typé.",
    "syntaxIntro": "Une union utilise | ; un discriminant facilite les branches ; un générique utilise <T>. JSON.parse et response.json demandent une validation.",
    "syntax": "type Etat =\n  | { statut: 'chargement' }\n  | { statut: 'succès'; equipes: Equipe[] }\n  | { statut: 'erreur'; message: string };\n\nfunction premier<T>(elements: T[]): T | undefined {\n  return elements[0];\n}",
    "examples": [
      {
        "title": "Union discriminée",
        "code": "type Etat = { statut: 'chargement' } | { statut: 'erreur'; message: string };\nfunction decrire(etat: Etat): string {\n  if (etat.statut === 'erreur') return etat.message;\n  return 'Chargement…';\n}\nconsole.log(decrire({ statut: 'erreur', message: 'Indisponible' }));",
        "output": "Indisponible",
        "explain": "Le test sur statut permet à TypeScript de connaître les propriétés disponibles dans chaque branche.",
        "context": "TypeScript (.ts)",
        "walkthrough": [
          "Etat peut être chargement ou erreur. Le champ statut indique quelle forme est présente.",
          "Après le test statut === erreur, TypeScript sait que message existe et la fonction le renvoie."
        ]
      },
      {
        "title": "Vérifier une donnée reçue",
        "code": "type Equipe = { nom: string };\nfunction estEquipe(value: unknown): value is Equipe {\n  return typeof value === 'object' && value !== null &&\n    'nom' in value && typeof value.nom === 'string';\n}\nconst reponse: unknown = { nom: 'Orion' };\nif (estEquipe(reponse)) console.log(reponse.nom);",
        "output": "Orion",
        "explain": "Le garde de type vérifie la forme de la donnée à l’exécution avant de l’utiliser comme Equipe.",
        "context": "TypeScript (.ts)",
        "walkthrough": [
          "La valeur externe commence en unknown : on ne présume pas sa forme.",
          "estEquipe vérifie que c’est un objet avec un nom texte ; seulement après ce contrôle, le nom est utilisé."
        ]
      }
    ],
    "practice": "N’écrivez pas const data = await response.json() as Equipe[] sans valider des données non fiables. Le mot-clé as ne vérifie rien à l’exécution.",
    "era": "TypeScript",
    "kind": "Typage",
    "legacy": null,
    "startingPoint": "Une donnée reçue du réseau peut avoir une forme inattendue. Un type écrit dans le code ne change pas la réponse du serveur. On doit contrôler la donnée réelle avant de lui faire confiance.",
    "terms": [
      {
        "word": "union",
        "meaning": "Type qui accepte plusieurs formes possibles."
      },
      {
        "word": "générique",
        "meaning": "Fonction ou structure qui conserve un type variable."
      },
      {
        "word": "unknown",
        "meaning": "Type d’une valeur dont la forme n’a pas encore été vérifiée."
      },
      {
        "word": "garde de type",
        "meaning": "Fonction qui vérifie la forme réelle d’une valeur."
      }
    ]
  },
  {
    "id": "qualite",
    "group": "Qualité",
    "title": "Tester et maintenir",
    "lead": "Un code fiable est lisible, isolé et vérifiable. Les petites fonctions déterministes se testent plus facilement que du code mêlant DOM, réseau et calcul.",
    "mental": "Séparez les règles métier des effets de bord. Un test fournit des entrées, vérifie une sortie et couvre aussi une limite ou une erreur.",
    "syntaxIntro": "Un test peut utiliser node:test et node:assert/strict, disponibles dans Node.js moderne. Les tests de DOM ou de réseau demandent un environnement ou des doublures adaptés.",
    "syntax": "// scores.js\nexport const estQualifie = (score, seuil = 10) => score >= seuil;\n\n// scores.test.js\nimport test from 'node:test';\nimport assert from 'node:assert/strict';\nimport { estQualifie } from './scores.js';\ntest('la limite est incluse', () => {\n  assert.equal(estQualifie(10), true);\n});",
    "examples": [
      {
        "title": "Tester une frontière",
        "code": "import test from 'node:test';\nimport assert from 'node:assert/strict';\nconst estQualifie = (score) => score >= 10;\ntest('seuil à 10 points', () => {\n  assert.equal(estQualifie(9), false);\n  assert.equal(estQualifie(10), true);\n});",
        "output": "1 test réussi",
        "explain": "Le test couvre la valeur juste avant le seuil et la valeur exacte du seuil. À exécuter avec node --test dans Node.js.",
        "context": "Node.js / test",
        "walkthrough": [
          "La fonction estQualifie renvoie false avant 10 et true à partir de 10.",
          "Le test compare les résultats pour 9 et exactement 10, là où une erreur de limite est plausible."
        ]
      },
      {
        "title": "Séparer calcul et affichage",
        "code": "const resume = (equipe) => `${equipe.nom} · ${equipe.points} points`;\nconst texte = resume({ nom: 'Orion', points: 18 });\nconsole.log(texte);\n// L’interface décidera séparément où afficher texte.",
        "output": "Orion · 18 points",
        "explain": "resume est facile à tester parce qu’elle ne lit ni le DOM ni le réseau.",
        "context": "JavaScript moderne",
        "walkthrough": [
          "resume reçoit un objet et produit une chaîne, sans modifier la page.",
          "console.log montre le résultat ; une autre fonction pourrait ensuite décider où l’afficher dans le DOM."
        ]
      }
    ],
    "practice": "Nommez les fonctions selon leur rôle, gérez les erreurs aux frontières, évitez les mutations inutiles et testez les règles qui portent un vrai risque.",
    "era": "ES6+",
    "kind": "Qualité",
    "legacy": null,
    "startingPoint": "Un code facile à vérifier sépare le calcul de l’affichage et du réseau. Une fonction qui reçoit des valeurs et renvoie un résultat précis est simple à tester. Les tests couvrent les cas habituels et les limites.",
    "terms": [
      {
        "word": "test",
        "meaning": "Exécution automatique qui compare un résultat au résultat attendu."
      },
      {
        "word": "effet de bord",
        "meaning": "Action qui change quelque chose hors de la fonction, comme le DOM."
      },
      {
        "word": "cas limite",
        "meaning": "Valeur située à la frontière d’une règle, par exemple exactement 10 points."
      }
    ]
  }
];
