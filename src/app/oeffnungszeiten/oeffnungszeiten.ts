interface Zeit {
    h: number,
    m: number
}
interface Oeffnungszeit {
    von: Zeit,
    /** Bis zum Ende des Tages, falls nicht angegeben */
    bis?: Zeit
}
interface Wochentag {
    titel: string,
    oeffnungszeiten: Oeffnungszeit[]
}
const standardOeffnungszeiten: Oeffnungszeit[] = [
    {
        von: { h: 11, m: 0 },
        bis: { h: 14, m: 30 }
    },
    {
        von: { h: 17, m: 0 }
    }
];

export const oeffnungszeiten: Wochentag[] = [
    {
        titel: 'Montag',
        oeffnungszeiten: []
    },
    {
        titel: 'Dienstag',
        oeffnungszeiten: standardOeffnungszeiten
    },
    {
        titel: 'Mittwoch',
        oeffnungszeiten: standardOeffnungszeiten
    },
    {
        titel: 'Donnerstag',
        oeffnungszeiten: standardOeffnungszeiten
    },
    {
        titel: 'Freitag',
        oeffnungszeiten: standardOeffnungszeiten
    },
    {
        titel: 'Samstag',
        oeffnungszeiten: standardOeffnungszeiten
    },
    {
        titel: 'Sonntag',
        oeffnungszeiten: standardOeffnungszeiten
    },
];