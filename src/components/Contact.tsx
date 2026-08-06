import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Hubungi Saya</h1>
          <p>Punya ide proyek atau berminat untuk berkolaborasi? Mari wujudkan bersama!</p>
          
          <div className="contact-details-grid">
            <div>
              <EmailIcon style={{ color: '#ab47bc' }} />
              <a href="mailto:muhammadyusri00000@gmail.com">muhammadyusri00000@gmail.com</a>
            </div>
            <div>
              <PhoneIcon style={{ color: '#ab47bc' }} />
              <a href="whatsapp://send?phone=+6285856800664">+6285856800664</a>
            </div>
            <div>
              <LocationOnIcon style={{ color: '#ab47bc' }} />
              <span>Sampang, Jawa Timur, Indonesia</span>
            </div>
            <div>
              <LanguageIcon style={{ color: '#ab47bc' }} />
              <a href="https://myusri.dev" target="_blank" rel="noreferrer">myusri.dev</a>
            </div>
          </div>

          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                id="outlined-required"
                label="Nama Lengkap"
                placeholder="Siapa nama Anda?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Mohon masukkan nama Anda" : ""}
              />
              <TextField
                required
                id="outlined-required"
                label="Email / No. HP"
                placeholder="Bagaimana saya bisa menghubungi Anda?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? "Mohon masukkan email atau nomor kontak Anda" : ""}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Pesan"
              placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
              multiline
              rows={6}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Mohon masukkan isi pesan Anda" : ""}
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              Kirim Pesan
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;