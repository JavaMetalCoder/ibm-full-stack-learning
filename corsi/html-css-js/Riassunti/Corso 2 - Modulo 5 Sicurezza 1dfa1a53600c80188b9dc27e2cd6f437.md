# Corso 2 - Modulo 5: Sicurezza

**Canvas di Sintesi - Corso 2 Modulo 5: Sicurezza e Monitoraggio nel Cloud**

---

## 1. Panorama Generale e Modelli Cloud

- **Motivazioni**: scalabilità, flessibilità e risparmio costi; nuovi rischi di sicurezza.
- **Modelli as-a-Service**:
    - **IaaS**: infrastruttura (VM, storage, rete) affidata al provider;
    - **PaaS**: piattaforma (OS, middleware, tool) gestita dal provider;
    - **SaaS**: applicazioni complete erogate dal provider.

## 2. Principali Sfide e Minacce della Sicurezza Cloud

- **Visibilità limitata**: difficile tracciare accessi e servizi.
- **Multitenancy**: isolamento tra clienti su infrastrutture condivise.
- **Shadow IT & IAM**: controllo degli accessi, configurazioni errate.
- **Minacce interne** e **DDoS**, **data breach**.

## 3. Shared Responsibility Model

| Servizio | Responsabilità Provider | Responsabilità Cliente |
| --- | --- | --- |
| IaaS | Sicurezza fisica data center | Sicurezza OS, app, dati |
| PaaS | Infrastruttura e piattaforma | Sicurezza del codice e dei dati |
| SaaS | Intero stack infrastruttura e app | Protezione credenziali, configurazioni |

## 4. Zero Trust e Identity & Access Management (IAM)

- **Zero Trust**: mai fidarsi, sempre verificare ogni richiesta.
- **Componenti IAM**:
    - **Autenticazione**: IdP, social login, MFA;
    - **Directory**: gestione centralizzata profili e password;
    - **Provisioning/De-provisioning**: least privilege principle;
    - **Reporting & Audit**: log e compliance.
- **Gruppi e policy**: soggetto, risorsa, ruolo.

## 5. Crittografia come Dante Ultima Linea di Difesa

- **Algoritmo + chiave**: cifratura e decifratura.
- **Stati di protezione**:
    - **At rest** (SSE, CSE);
    - **In transit** (TLS/SSL);
    - **In use** (homomorphic, secure enclaves).
- **Key Management**: separazione, backup off‑site, rotazione, MFA.
- **Multi‑cloud**: console unificate.

## 6. Monitoraggio Cloud

### 6.1 Fondamenti

- **Allarmi**, **Log**, **Metrica**, **Eventi**: raccolta, analisi, alerting.
- **Dashboard**: visibilità real‑time.

### 6.2 Service‑Based Monitoring

- **Load Balancer**, **CDN**, **Auto‑Scaling**, **IAC drift detection**.

### 6.3 Livelli di Monitoraggio

1. **Infrastructure Monitoring**
2. **Database Monitoring**
3. **Application Performance Monitoring (APM)**

### 6.4 Best Practice

- **RUM** (Real User Monitoring);
- **Console unificata** per KPI;
- **Cost Monitoring**;
- **Automazione alert**;
- **Chaos Engineering** per validare resilienza.

## 7. API Auditing e Conformità

- **Servizi**: AWS CloudTrail, GCP Audit Logging, Azure Activity Logs, Salesforce Event Monitoring.
- **Obiettivi**: trasparenza, responsabilità, compliance normativa.

## 8. Attacchi, Vulnerabilità e Mitigazioni

- **DDoS** → AWS Shield, Cloud Armor;
- **Data Breach** → IAM rigido, cifratura, KMS;
- **Misconfigurations** → CSPM (AWS Config, Security Center);
- **Insider Threats** → least privilege, audit continuo.

---

**Conclusione:**

- Adozione integrata di **sicurezza** e **monitoraggio** garantisce infrastrutture cloud resilienti, conformi e performanti.
- **Next steps**: laboratori pratici su IAM, cifratura, IaC drift detection e configurazione di pipeline di monitoraggio.