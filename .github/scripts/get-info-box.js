const announcment = process.env.ANNOUNCMENT;
const vacationFrom = process.env.VACATION_FROM;
const vacationTo = process.env.VACATION_TO;

if (!announcment && !vacationFrom && !vacationTo) {
    return;
}

const msgAnnouncment = announcment
    ? `<h2>Information</h2>${announcment}`
    : '';

let msgVacation = '';

if (vacationFrom || vacationTo) {
    let vacationFromStr = '';
    if(vacationFrom) {
        const vacationFromDate = new Date(vacationFrom);
        const month = vacationFromDate.toLocaleString('default', { month: 'long' });
        vacationFromStr = `${vacationFromDate.getDate()}. ${month}`;
    }
    let vacationToStr = '';
    let vacationAfterToStr = '';
    if(vacationTo) {
        const vacationToDate = new Date(vacationTo);
        let month = vacationToDate.toLocaleString('default', { month: 'long' });
        vacationToStr = `${vacationToDate.getDate()}. ${month}`;
        
        const vacationAfterToDate = new Date(vacationToDate.getTime());
        vacationAfterToDate.setDate(vacationAfterToDate.getDate() + 1);
        month = vacationAfterToDate.toLocaleString('default', { month: 'long' });
        vacationAfterToStr = `${vacationAfterToDate.getDate()}. ${month}`;
    }

    if (vacationFrom && vacationTo) {
        msgVacation = `<p>
        <strong>Vom ${vacationFromStr} bis zum ${vacationToStr} sind wir im Urlaub!</strong><br>
        Wir freuen uns darauf, Sie ab dem ${vacationAfterToStr} wieder mit unseren griechischen Spezialitäten verwöhnen zu dürfen.
        </p>`;
    } else if (vacationFrom) {
        msgVacation = `<p>
        <strong>Ab dem ${vacationFromStr} sind wir im Urlaub!</strong><br>
        Wir freuen uns darauf, Sie bald wieder mit unseren griechischen Spezialitäten verwöhnen zu dürfen.
        </p>`;
    } else {
        msgVacation = `<p>
        <strong>Bis zum ${vacationToStr} sind wir im Urlaub!</strong><br>
        Wir freuen uns darauf, Sie ab dem ${vacationAfterToStr} wieder mit unseren griechischen Spezialitäten verwöhnen zu dürfen.
        </p>`;
    }
}

const finalMsgVacation = msgVacation
    ? `<h2>Betriebsurlaub</h2>${msgVacation}`
    : '';

console.log(`<div class="info-box">
    ${msgAnnouncment}
    ${finalMsgVacation}
    </div>`)