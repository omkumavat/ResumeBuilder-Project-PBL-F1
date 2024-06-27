const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const {Pdf}=require('./convert');
const puppeteer=require('puppeteer');
// app.use(express.static(path.join(__dirname, 'views')));

let personalData = null;
let contactData = null;
let secondaryData = null;
let highSecondaryData = null;
let underGraduateData = null;
let skillData = null;
let skill1, skill2, skill3, skill4;
let experienceData = null;
let hobby1, hobby2, hobby3, hobby4;
let hobbyData = null;

// Set the directory for uploaded files
const uploadDirectory = path.join(__dirname, '..', 'public');
console.log(uploadDirectory);

// Set up multer for handling file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDirectory);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// Route to serve the HTML form for personal details
router.get('/home/personal', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'PBL form', 'personal.html'));
});

// Route to handle personal details form submission
router.post('/pdetails', upload.single('photo'), (req, res) => {
    const { fname, lname, pname, person } = req.body;
    const photoPath = req.file ? req.file.path : null;

    // You can process the form data here
    const fileName = req.file ? req.file.filename : null;
    console.log(req.file);
    console.log(photoPath);
    console.log(fileName);

    // Store personal data
    personalData = { fname, lname, pname, fileName, person };
    console.log(personalData);

    // Redirect to the contact details form
    // res.sendFile(path.join(__dirname, '..', '..', 'PBL form', 'contact.html'));
    res.redirect('/home/contact');
    // window.location.href='/cdetails';
    // res.render('resume1',{fname,lname,fileName,pname});
});

router.get('/home/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'PBL form', 'contact.html'));
});


// Route to handle contact details form submission
router.post('/contactd', (req, res) => {
    try {
        const { mobile, email, address } = req.body;
        console.log(mobile);

        // Store contact data
        contactData = { mobile, email, address };
        console.log(contactData);

        // You can send some response to acknowledge the submission
        // res.send('Contact details submitted successfully');
        res.redirect('/home/secondary');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


router.get('/home/secondary', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'PBL form', 'education.html'));
});

router.post('/10details', (req, res) => {

    try {
        const { sname, pyear, percentage } = req.body;
        secondaryData = { sname, pyear, percentage };
        console.log(secondaryData);
        res.redirect('/home/highsecondary');

    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
})

router.get('/home/highsecondary', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'PBL form', 'high.html'));
});

router.post('/12details', (req, res) => {
    try {
        const { iname, Science, payear, percentageb } = req.body;
        highSecondaryData = { iname, Science, payear, percentageb };
        console.log(highSecondaryData);
        // res.redirect('/home/highsecondary');
        // res.send('submit')
        res.redirect('/home/ug');
        // res.render('resume1', { personalData, contactData, secondaryData, highSecondaryData });

    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
})

router.get('/home/ug', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'PBL form', 'underg.html'));
});

router.post('/under', (req, res) => {
    try {
        const { cname, syear, eyear, cgpa } = req.body;
        underGraduateData = { cname, syear, eyear, cgpa };
        console.log(underGraduateData);
        res.redirect('/home/skills');

    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
})

router.get('/home/skills', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'PBL form', 'skills.html'));
});

router.post('/skill', (req, res) => {
    try {
        // Retrieve skill data from the request body
        skillData = req.body;

        // Log the entire skillData array
        console.log(skillData);

        // Check if skillData is an array and has at least one element
        if (Array.isArray(skillData) && skillData.length > 0) {
            // Access and log the value of the first skill
            console.log('Value of the first skill:', skillData[0].value);
            skill1 = skillData[0].value;
            console.log('Value of the first skill:', skillData[1].value);
            skill2 = skillData[1].value;
            console.log('Value of the first skill:', skillData[2].value);
            skill3 = skillData[2].value;
            console.log('Value of the first skill:', skillData[3].value);
            skill4 = skillData[3].value;
        } else {
            console.log('No skill data received');
        }

        // Send a response to the client
        res.redirect('/home/experience');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
})

router.get('/home/experience', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'PBL form', 'experience.html'));
});

router.post('/exp', (req, res) => {
    try {
        const { comp, jdate, edate, disc } = req.body;
        experienceData = { comp, jdate, edate, disc };
        console.log(experienceData);
        res.redirect('/home/hobby');

    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
})

router.get('/home/hobby', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'PBL form', 'hobby.html'));
});

router.post('/hobby', (req, res) => {
    try {
        // Retrieve skill data from the request body
        hobbyData = req.body;

        // Log the entire skillData array
        console.log(hobbyData);

        // Check if skillData is an array and has at least one element
        if (Array.isArray(hobbyData) && hobbyData.length > 0) {
            // Access and log the value of the first skill
            console.log('Value of the first hobby:', hobbyData[0].value);
            hobby1 = hobbyData[0].value;
            console.log('Value of the first hobby:', hobbyData[1].value);
            hobby2 = hobbyData[1].value;
            console.log('Value of the first hobby:', hobbyData[2].value);
            hobby3 = hobbyData[2].value;
            console.log('Value of the first hobby:', hobbyData[3].value);
            hobby4 = hobbyData[3].value;
        } else {
            console.log('No hobby data received');
        }

        res.redirect('/home/select');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
})


router.get('/home/select', (req, res) => {
    res.render('select');
});

// Route to get personal and contact data
router.get('/home/get-resume2', (req, res) => {
    // res.json({ personalData, contactData, secondaryData});
    res.render('resume2', {
        personalData, contactData, secondaryData, highSecondaryData,
        underGraduateData, skill1, skill2, skill3, skill4, experienceData, hobby1, hobby2, hobby3, hobby4
    });
});

router.get('/home/get-resume3', (req, res) => {
    // res.json({ personalData, contactData, secondaryData});
    res.render('resume3', {
        personalData, contactData, secondaryData, highSecondaryData,
        underGraduateData, skill1, skill2, skill3, skill4, experienceData, hobby1, hobby2, hobby3, hobby4
    });
});

router.get('/home/get-resume1', (req, res) => {
    // res.json({ personalData, contactData, secondaryData});
    res.render('resume1', {
        personalData, contactData, secondaryData, highSecondaryData,
        underGraduateData, skill1, skill2, skill3, skill4, experienceData, hobby1, hobby2, hobby3, hobby4
    });
});

router.post('/generate-pdf',Pdf);

module.exports = router;
