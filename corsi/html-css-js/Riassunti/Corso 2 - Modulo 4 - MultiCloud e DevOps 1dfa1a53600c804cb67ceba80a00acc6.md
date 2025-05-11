# Corso 2 - Modulo 4 - MultiCloud e DevOps

**RIASSUNTO SEMPLIFICATO – MODERNIZZAZIONE APPLICATIVA, DEVOPS E CLOUD**

In questa parte del corso IBM Full Stack abbiamo scoperto alcuni dei concetti più importanti per chi vuole lavorare con la tecnologia moderna. Abbiamo parlato di cloud, microservizi, DevOps e della modernizzazione delle applicazioni (AppMod), tutti legati tra loro per aiutare le aziende a lavorare meglio e più velocemente.

---

### 1. DALLO STILE CLASSICO AL CLOUD

Oggi molte aziende usano il **cloud**, cioè server e strumenti accessibili via internet, invece dei vecchi computer fisici in sede.

- **Cloud ibrido**: unisce sistemi locali e cloud pubblico.
- **Multi-cloud**: usa più fornitori cloud (come AWS, Azure, IBM) insieme.

Esempi pratici ci mostrano come questo permetta alle aziende di essere più flessibili e rispondere meglio alle richieste dei clienti, specialmente in periodi con molti utenti.

### 2. COSA SONO I MICROSERVIZI

In passato le applicazioni erano "tutti-in-uno" (monoliti). Ora invece si dividono in **microservizi**, cioè piccoli pezzi che fanno cose specifiche:

- Ogni microservizio può essere aggiornato o sistemato senza toccare gli altri.
- Sono contenuti in "scatole software" chiamate **container**.
- Comunicano tra loro con **API**.

Un esempio è Dream Game: ha un microservizio per la ricerca, uno per il catalogo, uno per i suggerimenti. Lavorano insieme ma in modo indipendente.

### 3. SERVERLESS: CODICE CHE PARTE SOLO QUANDO SERVE

Con il modello **serverless**:

- Il codice parte solo quando è necessario (es. un utente invia un file).
- Nessun server da gestire.
- Si paga solo quando il codice viene eseguito.

È utile per attività automatiche, come trasformare file o rispondere a eventi da sensori.

### 4. APPLICAZIONI CLOUD-NATIVE

Le app cloud-native nascono per funzionare nel cloud:

- Sono fatte da microservizi
- Usano container
- Si adattano automaticamente alla richiesta degli utenti

Funzionano su piattaforme moderne (Kubernetes, Knative) e si collegano facilmente ad altri servizi grazie a strumenti di controllo e sicurezza (come Istio).

### 5. DEVOPS: COME COLLABORARE MEGLIO

**DevOps** è un metodo di lavoro in cui chi scrive il codice (Dev) e chi lo mette online (Ops) lavorano insieme:

- **CI**: ogni modifica viene testata subito
- **CD**: il codice è sempre pronto al rilascio
- **CDep**: il rilascio avviene automaticamente
- **CM**: si controllano costantemente le performance

Tutto avviene tramite una **pipeline**, cioè una serie automatica di passaggi con strumenti come GitHub, Jenkins, Prometheus.

### 6. USARE DEVOPS NEL CLOUD

Il cloud aiuta molto il lavoro DevOps:

- I server si creano automaticamente
- I rilasci sono veloci e tracciabili
- I team collaborano meglio

Ogni piattaforma ha i suoi strumenti:

- **AWS**: Lambda, CodePipeline
- **Azure**: DevOps, AKS, Functions
- **GCP**: Cloud Build, GKE, Cloud Functions
- **IBM Cloud**: Continuous Delivery, Kubernetes, Functions

### 7. MODERNIZZARE LE APPLICAZIONI

Modernizzare le app significa cambiare:

1. **Struttura** (da monoliti a microservizi)
2. **Infrastruttura** (dal server fisico al cloud)
3. **Metodo di lavoro** (da Waterfall a DevOps/SRE)

Tutti e tre i cambiamenti devono avvenire **insieme** per funzionare davvero.
Se fai solo uno, non sfrutti tutti i vantaggi.

---

### 📌 CONCLUSIONI

Abbiamo imparato le basi del software moderno:

- Come funziona il **cloud**
- Cos’è un **microservizio**
- Come lavorare con **DevOps**
- Perché modernizzare le app è utile

Queste conoscenze sono importanti per lavorare in team moderni, sviluppare soluzioni flessibili e iniziare a costruire app che funzionano bene nel mondo reale.

Prossimo passo: imparare a costruire l’interfaccia delle app con **HTML, CSS e JavaScript**!

*🔧 Grande Fabietto, continua così: stai diventando un vero MetalCoder, uno che il codice lo fa girare bene!* 🤘☁️💻