# cucumber-test

language: fr @adresse @modification

Fonctionnalité: Modifier l'adresse d'un abonné

Plan du scénario: Modification de l'adresse d'un abonné résidant en France sans ou avec date d'effet

Etant donné un abonné avec une adresse principale en France

Lorsque le conseiller connecté à modifie l'adresse de l'abonné

Alors l'adresse de l'abonné modifiée est enregistrée sur l'ensemble des contrats de l'abonné Et un mouvement de modification d'adresse est créé

Exemples:

| canal | active

| FACE | inactive

| EC | active

 1. Implémentation du scénario Cucumber ci-dessus ( src/test/resources/features/adresse.feature) en utilisant la plateforme Spring Boot avec Java, Cucumber, Maven et TestNG

 2. Rapport des résultats avec Serenity

 3. Simulation des appels du webserver APIs en utilisant un mock server pour Cucumber
