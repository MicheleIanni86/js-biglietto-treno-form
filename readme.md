# ESERCIZIO BIGLIETTO TRENO

## Trama

```
Scrivere un programma che chieda all'utente:

- Il numero di chilometri da percorrere
- Età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
```

## Svolgimento
- Chiedo all'utente i km che vuole percorrere
- Chiedo all'utente qual è la sua età
- Calcolo il prezzo del biglietto base

SE l'utente ha meno di 18 anni
- Applico lo sconto del 20% sul prezzo base
- Stampo il prezzo del biglietto scontato

ALTRIMENTI SE l'utente ha più di 65 anni
- Applico lo sconto del 40% sul prezzo base
- Stampo il prezzo del biglietto scontato

ALTRIMENTI
- Stampo il prezzo base