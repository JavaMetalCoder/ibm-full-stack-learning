# Corso 1 - APPUNTI DI INGEGNERIA DEL SOFTWARE

APPUNTI AVANZATI DI INGEGNERIA DEL SOFTWARE – COMPENDIO PER STUDENTI UNIVERSITARI

---

📘 Titolo: Ingegneria del Software – Struttura, Metodologie e Architetture

📍 Introduzione:
Questo compendio affronta i principali concetti dell’ingegneria del software, proponendo una visione approfondita ma sintetica del ciclo di vita del software (SDLC), delle metodologie di sviluppo, dei sistemi distribuiti e delle architetture moderne. I contenuti sono stati rielaborati con un linguaggio formale, chiaro e concettualmente rigoroso, con l'obiettivo di fornire supporto a studenti universitari in fase di preparazione a esami o alla tesi.

---

🔹 1. Definizione e contesto dell'ingegneria del software
L'ingegneria del software è la disciplina che si occupa dello sviluppo sistematico di sistemi software, applicando principi dell’ingegneria tradizionale a processi computazionali. È una risposta strutturata alla "crisi del software" emersa negli anni ’60, caratterizzata da costi fuori controllo, scarsa qualità del prodotto finale e tempistiche non sostenibili.

Il focus è sull’affidabilità, sulla manutenibilità e sull’efficienza dei sistemi, tenendo conto dei vincoli di progetto e delle esigenze degli stakeholder. L’approccio scientifico è integrato da strumenti metodologici, linguaggi formali e cicli di vita definiti.

---

🔹 2. Ciclo di vita del software (SDLC)
Il Software Development Life Cycle rappresenta il framework concettuale che guida le fasi dello sviluppo software. Le fasi principali includono:

- **Analisi dei requisiti**: Raccolta e validazione delle esigenze degli stakeholder tramite documenti come SRS e URS.
- **Progettazione**: Definizione dell’architettura tecnica e logica del sistema, con l’uso di UML e altri strumenti di modellazione.
- **Implementazione**: Codifica del sistema secondo standard di qualità e sicurezza.
- **Verifica e validazione**: Testing funzionale e non funzionale, incluso il collaudo.
- **Deployment**: Rilascio e configurazione in ambiente di produzione.
- **Manutenzione**: Aggiornamenti correttivi, adattivi ed evolutivi.

Il SDLC può essere iterativo, incrementale o sequenziale (Waterfall), a seconda del contesto progettuale.

---

🔹 3. Metodologie di sviluppo
Le metodologie determinano l'organizzazione operativa del team e le modalità di gestione dei progetti:

- **Waterfall**: modello a cascata, sequenziale e statico; adatto a contesti con requisiti stabili.
- **V-Model**: variante del Waterfall che integra il testing in ogni fase.
- **Agile**: approccio iterativo e incrementale basato su feedback continui, sprint brevi e coinvolgimento attivo degli stakeholder.
- **DevOps**: integrazione tra sviluppo e operations per garantire rilasci frequenti, automatizzati e affidabili.

Le organizzazioni moderne adottano spesso metodologie ibride (Agile-Waterfall), cercando di bilanciare controllo e adattabilità.

---

🔹 4. Versionamento del software
Il versionamento semantico consente la tracciabilità dell’evoluzione del software e viene comunemente espresso nel formato **MAJOR.MINOR.PATCH**, dove:

- **MAJOR**: cambiamenti incompatibili con versioni precedenti.
- **MINOR**: aggiunta di nuove funzionalità retrocompatibili.
- **PATCH**: correzioni di bug e aggiornamenti minori.

Sono previsti suffissi per versioni pre-rilascio (es. alpha, beta) o specifiche per ambienti (dev, prod).

---

🔹 5. Testing del software
Il processo di verifica e validazione comprende:

- **Test funzionali**: validano il comportamento del software rispetto ai requisiti.
- **Test non funzionali**: includono performance, scalabilità, affidabilità e sicurezza.
- **Test di regressione**: verificano la non introduzione di nuovi difetti a seguito di modifiche.

**Livelli di test:**

- **Unit test**: verifica di singole unità logiche.
- **Integration test**: verifica dell’interazione tra moduli.
- **System test**: verifica dell’intero sistema.
- **Acceptance test**: approvazione del cliente prima della distribuzione.

---

🔹 6. Documentazione
La documentazione rappresenta l’insieme delle risorse testuali e grafiche utili a descrivere, progettare, utilizzare e mantenere un sistema software. Le categorie principali includono:

- **Requisiti**: SRS, URS, SYSRS
- **Design**: architettura, diagrammi UML, specifiche tecniche
- **Utente finale**: manuali, guide d’uso, tutorial
- **Processo**: SOP, checklist, policy di rilascio

La documentazione deve essere dinamica, aggiornata e accessibile. L’automazione con strumenti di documentazione (es. Doxygen, MkDocs) è fortemente raccomandata.

---

🔹 7. Ruoli nel team di sviluppo
I progetti software complessi prevedono ruoli specializzati:

- **Product Owner**: gestisce la visione del prodotto
- **Project Manager**: coordina risorse, tempi e budget
- **Software Architect**: definisce l’architettura tecnica
- **Developer**: sviluppa e integra codice
- **Tester / QA Engineer**: esegue il testing
- **DevOps Engineer / SRE**: gestisce l'infrastruttura e il deployment
- **UX/UI Designer**: progetta l’esperienza utente
- **Technical Writer**: cura la documentazione

---

🔹 8. Specifica dei requisiti

**Tipologie di requisiti:**

- **Funzionali**: ciò che il sistema deve fare (es. "il sistema deve permettere l’autenticazione dell’utente")
- **Non funzionali**: requisiti qualitativi (prestazioni, sicurezza, usabilità)
- **Vincoli**: limitazioni tecniche, legali o organizzative

**Fasi:**

- Elicitation
- Documentazione (SRS, URS)
- Validazione
- Gestione del cambiamento (change management)

---

🔹 9. Modellazione e UML
UML (Unified Modeling Language) è lo standard per la rappresentazione grafica dei modelli software.

**Diagrammi principali:**

- **Classi**: struttura statica del sistema (classi, attributi, metodi)
- **Sequenza**: interazione tra oggetti nel tempo
- **Stato**: transizioni e cicli di vita
- **Componenti**: moduli software e loro dipendenze

---

🔹 10. Object-Oriented Analysis & Design (OOAD)
L’approccio orientato agli oggetti prevede la modellazione del sistema attraverso classi, oggetti e relazioni.

**Concetti chiave:**

- **Classe**: modello astratto con attributi e metodi
- **Oggetto**: istanza concreta di una classe
- **Incapsulamento, ereditarietà, polimorfismo**: pilastri della programmazione OO

---

🔹 11. Architetture software e componenti
Le architetture moderne sono composte da componenti autonomi, intercambiabili e riutilizzabili, spesso aggregati in servizi.

**Service-Oriented Architecture (SOA):** modello che promuove l’interoperabilità tra componenti distribuiti mediante API e protocolli standard (es. REST, SOAP).

**Componenti ben progettati devono essere:**

- Coesi
- Disaccoppiati
- Riutilizzabili
- Sostituibili

---

🔹 12. Sistemi distribuiti e modelli architetturali

**Caratteristiche dei sistemi distribuiti:**

- Tolleranza ai guasti
- Scalabilità
- Eterogeneità
- Concorrenza

**Modelli comuni:**

- **Client-server**
- **3-tier**: presentazione, logica, dati
- **Peer-to-peer**
- **Event-driven**
- **Microservizi**: servizi autonomi, orchestrati via API Gateway

---

🔹 13. Ambienti applicativi

**Tipologie:**

- **Development**: ambiente locale dello sviluppatore
- **QA/Test**: ambiente di validazione
- **Staging**: ambiente di pre-produzione
- **Production**: ambiente attivo per gli utenti finali

**Deployment:**

- **On-premise**: infrastruttura interna
- **Cloud pubblico**: risorse condivise (es. AWS, Azure)
- **Cloud privato**: uso esclusivo di un’organizzazione
- **Ibrido**: combinazione dei due modelli

---

🔹 14. Componenti in ambienti produttivi

**Elementi infrastrutturali chiave:**

- **Firewall**: protezione perimetrale
- **Load Balancer**: distribuzione del traffico
- **Web Server**: gestione delle richieste HTTP
- **Application Server**: esecuzione della logica applicativa
- **Proxy Server**: mediazione tra client e backend
- **Database Server**: archiviazione persistente dei dati

---

APPUNTI AVANZATI DI INGEGNERIA DEL SOFTWARE – COMPENDIO UNIVERSITARIO COMPLETO

---

📘 Titolo: Ingegneria del Software – Struttura, Metodologie, Competenze e Prospettive Professionali

📍 Introduzione:
Questo compendio offre una visione completa dell’ingegneria del software, affrontando aspetti teorici, metodologici, pratici ed etici. Include concetti chiave sul ciclo di vita del software, le metodologie di sviluppo, le competenze necessarie, i ruoli professionali, le prospettive occupazionali e i percorsi di carriera. È progettato per studenti universitari che desiderano consolidare le proprie conoscenze in vista della laurea o dell’ingresso nel mondo del lavoro.

---

🔹 Aggiunte tematiche: Competenze, Lavoro, Etica, Ruoli

🔸 **15. Competenze richieste nell’ingegneria del software**
Le competenze si dividono in due categorie principali:

**Hard Skills (competenze tecniche):**

- Programmazione (Java, Python, C#, ecc.)
- Debugging e testing (manuale e automatico)
- Controllo di versione (Git)
- Database e SQL
- CI/CD e containerizzazione (Docker, Jenkins)
- Architettura del software e design pattern

**Soft Skills (competenze trasversali):**

- Comunicazione e lavoro in team (stand-up meeting, feedback)
- Problem solving e pensiero critico
- Gestione del tempo e delle scadenze
- Adattabilità e flessibilità
- Accettazione e integrazione del feedback

🧠 Nota: le hard skills si apprendono formalmente, le soft skills si costruiscono anche attraverso esperienze pratiche, collaborazioni e attività interdisciplinari.

---

🔸 **16. Prospettive lavorative e settori occupazionali**

**Domanda in crescita:**

- Crescente necessità di software in tutti i settori
- Espansione dell’Internet of Things (IoT)
- Aggiornamento continuo delle applicazioni esistenti
- Aumento dei rischi legati alla cybersecurity

**Dati USA:**

- Crescita prevista 2020–2030: +22% (Bureau of Labor Statistics)
- Oltre 200.000 nuove posizioni annuali previste

**Stipendi medi (USA):**

- Junior: $90.000/anno
- Senior: $120.000+/anno

**Settori:**

- Tech (Google, Meta, Amazon, ecc.)
- Finanza, sanità, assicurazioni, pharma
- Start-up, agenzie digitali, software house
- Pubblica amministrazione, ONG, open source

---

🔸 **17. Percorsi di carriera**

**Due direzioni principali:**

- Tecnica (es. Software Engineer → Senior → Architect → CTO)
- Gestionale (es. Software Engineer → Team Lead → Engineering Manager → Director/VP)

**Ruoli comuni:**

- Junior Software Engineer → Software Engineer → Senior Engineer
- Staff Engineer / Tech Lead → Principal Engineer / Architect
- Engineering Manager → Director of Engineering → CTO

**Alternative e transizioni:**

- Data Engineer, Data Scientist, DBA
- DevOps Specialist, QA Tester
- Technical Sales, Customer Success
- Freelance, consulente, docente

📎 Nota: il percorso non è lineare né obbligato, ma basato su passioni, attitudini e opportunità.

---

🔸 **18. Titoli di lavoro e specializzazioni**

**Front-end Engineer:** UI/UX, React, HTML/CSS/JS
**Back-end Engineer:** logica, API, database
**Full-stack Engineer:** competenze sia front che back
**DevOps Engineer:** CI/CD, server, container
**QA Engineer:** test, automazione, bug tracking
**Security Engineer:** test di penetrazione, crittografia
**Mobile Developer:** Android, iOS, React Native
**Game Developer:** logica, grafica, motori di gioco (Unity, Unreal)

🎯 Ogni ruolo richiede un mix specifico di competenze e strumenti, ma tutti collaborano allo sviluppo di soluzioni complete e sicure.

---

🔸 **19. Etica professionale**
Il codice etico IEEE-CS/ACM stabilisce otto principi fondamentali per l’ingegnere del software:

1. **Pubblico:** agire nell’interesse del bene comune
2. **Cliente e datore di lavoro:** onestà, riservatezza, trasparenza
3. **Prodotto:** qualità, sicurezza, accessibilità
4. **Giudizio:** integrità professionale e obiettività
5. **Gestione:** responsabilità etica nei team e nei processi
6. **Professione:** difendere la reputazione della disciplina
7. **Colleghi:** rispetto, collaborazione, merito
8. **Sé stessi:** formazione continua e condotta professionale

📌 Nota: l’etica non è un insieme di regole rigide, ma una guida da integrare nel pensiero critico e nella pratica quotidiana.

---

📌 Conclusione aggiornata:
L’ingegneria del software non è solo tecnica: è anche collaborazione, responsabilità e apprendimento continuo. Oltre ai concetti tecnici, è essenziale comprendere i ruoli nel team, la dinamica professionale e l’evoluzione del settore. Essere ingegneri del software oggi significa contribuire a costruire soluzioni reali, etiche e scalabili per un mondo sempre più connesso.

📍 Punti chiave aggiornati:

- Le soft skills sono determinanti quanto le hard skills
- Le opportunità professionali sono ampie e in crescita
- I percorsi di carriera sono personalizzabili e flessibili
- L’etica guida l’uso responsabile delle tecnologie
- L’ingegneria del software è una disciplina umana, oltre che tecnica