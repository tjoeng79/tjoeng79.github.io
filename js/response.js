const params = new URLSearchParams(window.location.search);

const resName = params.get('name');
const resEmail = params.get('email');
const resEntity = params.get('entity');
const resInterest = params.get('interest');

const name_heading = document.getElementById('name');
name_heading.textContent = resName;

const email_heading = document.getElementById('email');
email_heading.textContent = resEmail;

const entity_heading = document.getElementById('entity');
entity_heading.textContent = resEntity;

const interest_heading = document.getElementById('interest');
interest_heading.textContent = resInterest;