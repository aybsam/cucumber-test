$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/adresse.feature");
formatter.feature({
  "name": "Modifier l\u0027adresse d\u0027un abonné",
  "description": "",
  "keyword": "Fonctionnalité",
  "tags": [
    {
      "name": "@adresse"
    },
    {
      "name": "@modification"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Modification de l\u0027adresse d\u0027un abonné résidant en France sans ou avec date d\u0027effet",
  "description": "",
  "keyword": "Plan du scénario"
});
formatter.step({
  "name": "un abonné avec une adresse principale \"\u003cactive\u003e\" en France",
  "keyword": "Etant donné "
});
formatter.step({
  "name": "le conseiller connecté à \"\u003ccanal\u003e\" modifie l\u0027adresse de l\u0027abonné",
  "keyword": "Lorsque "
});
formatter.step({
  "name": "l\u0027adresse de l\u0027abonné modifiée est enregistrée sur l\u0027ensemble des contrats de l\u0027abonné",
  "keyword": "Alors "
});
formatter.step({
  "name": "un mouvement de modification d\u0027adresse est créé",
  "keyword": "Et "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemples",
  "rows": [
    {
      "cells": [
        "canal"
      ]
    },
    {
      "cells": [
        "FACE"
      ]
    },
    {
      "cells": [
        "EC"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Modification de l\u0027adresse d\u0027un abonné résidant en France sans ou avec date d\u0027effet",
  "description": "",
  "keyword": "Plan du scénario",
  "tags": [
    {
      "name": "@adresse"
    },
    {
      "name": "@modification"
    }
  ]
});
formatter.step({
  "name": "un abonné avec une adresse principale \"\u003cactive\u003e\" en France",
  "keyword": "Etant donné "
});
formatter.match({
  "location": "adresseModification.unAbonneAvecUneAdressePrincipaleEnFrance(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "le conseiller connecté à \"FACE\" modifie l\u0027adresse de l\u0027abonné",
  "keyword": "Lorsque "
});
formatter.match({
  "location": "adresseModification.leChargeClienteleConnecteModifieLAdresseDeLAbonne(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "l\u0027adresse de l\u0027abonné modifiée est enregistrée sur l\u0027ensemble des contrats de l\u0027abonné",
  "keyword": "Alors "
});
formatter.match({
  "location": "adresseModification.lAdresseDeLAbonneModifieeEstEnregistreeSurLEnsembleDesContratsDeLAbonne()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "un mouvement de modification d\u0027adresse est créé",
  "keyword": "Et "
});
formatter.match({
  "location": "adresseModification.unMouvementDeModificationDAdresseEstCree()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Modification de l\u0027adresse d\u0027un abonné résidant en France sans ou avec date d\u0027effet",
  "description": "",
  "keyword": "Plan du scénario",
  "tags": [
    {
      "name": "@adresse"
    },
    {
      "name": "@modification"
    }
  ]
});
formatter.step({
  "name": "un abonné avec une adresse principale \"\u003cactive\u003e\" en France",
  "keyword": "Etant donné "
});
formatter.match({
  "location": "adresseModification.unAbonneAvecUneAdressePrincipaleEnFrance(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "le conseiller connecté à \"EC\" modifie l\u0027adresse de l\u0027abonné",
  "keyword": "Lorsque "
});
formatter.match({
  "location": "adresseModification.leChargeClienteleConnecteModifieLAdresseDeLAbonne(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "l\u0027adresse de l\u0027abonné modifiée est enregistrée sur l\u0027ensemble des contrats de l\u0027abonné",
  "keyword": "Alors "
});
formatter.match({
  "location": "adresseModification.lAdresseDeLAbonneModifieeEstEnregistreeSurLEnsembleDesContratsDeLAbonne()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "un mouvement de modification d\u0027adresse est créé",
  "keyword": "Et "
});
formatter.match({
  "location": "adresseModification.unMouvementDeModificationDAdresseEstCree()"
});
formatter.result({
  "status": "passed"
});
});