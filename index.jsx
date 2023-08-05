const express = require('express');
const cors = require('cors')
const app = express();
// require('./db/config');
const db = require('./db/config')

const multer = require('multer');

const { request, response } = require('express');

const contact = require('./db/contact');
const Employe = require('./db/Employe.jsx')
const Portfolio = require('./db/Portfolio.jsx');
const Client = require('./db/Client.jsx');
const Vacancy = require('./db/Vacancy.jsx');
const Login = require('./db/Login.jsx');

app.use(express.json());
app.use(cors());


// =================Login

app.post('/logIn', async (req, res) => {
    if (req.body.email && req.body.password) {
        let login = await Login.findOne(req.body).select("-password");
        if (login) {
            res.send(login);
        }
        else {
            res.send({ result: ' no user found' })
        }
    }
    else {
        res.send({ result: ' no result found' })
    }
})

// ----send data database

app.post('/register', async (req, res) => {
    let login = new Login(req.body);
    let result = await login.save();
    res.send(result);
})

// --display data

app.get("/user", async (req, res) => {
    let user = await Login.find();
    if (user.length > 0) {
        res.send(user)
    }
    else {
        console.warn({ result: "sorry, no user found" })
    }
})

// -----delete 

app.delete("/user/:id", async (req, res) => {
    const result = await Login.deleteOne({ _id: req.params.id })
    res.send(result);
});


// ---update 

app.get('/user/:id', async (req, res) => {
    let result = await Login.findOne({ _id: req.params.id });
    if (result) {
        res.send(result);
    }
    else {
        res.send({ result: "no data found" });
    }
});

app.put('/user/:id', async (req, res) => {
    let result = await Login.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        }
    )
    res.send(result);
})


// =================Employe

// ---------------count

app.get('/employeCount', async (req, res) => {
    const result = await Employe.find().count()
    res.send({ count: result })
})

const Employesimg = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/Employes/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const employesUpload = multer({ storage: Employesimg });


app.post('/addEmploye', employesUpload.single('image'), async (req, res) => {

    const url = req.protocol + '://' + req.get('host');

    const img = `${url}/images/${req.file.filename}`
    const name = req.body.name;
    const ability = req.body.ability;

    let employe = new Employe({ name: name, ability: ability, image: img });
    let result = await employe.save();
    res.send(result);
})
app.use('/images', express.static('uploads/Employes'));

// --display data

app.get("/employe", async (req, res) => {
    let employes = await Employe.find();
    if (employes.length > 0) {
        res.send(employes)
    }
    else {
        console.warn({ result: "no employees found" })
    }
})


// -----delete employe

app.delete("/employe/:id", async (req, res) => {
    const result = await Employe.deleteOne({ _id: req.params.id })
    res.send(result);
});


// ---update Employe

app.get('/employe/:id', async (req, res) => {
    let result = await Employe.findOne({ _id: req.params.id });
    if (result) {
        res.send(result);
    }
    else {
        res.send({ result: "no data found" });
    }
});

app.put('/employe/:id', employesUpload.single('image'), async (req, res) => {

    const url = req.protocol + '://' + req.get('host');
    const name = req.body.name;
    const ability = req.body.ability;

    if (!req.file) {
        let result = await Employe.findOne({ _id: req.params.id });
        var img = result.image
    }
    else {
        var img = `${url}/images/${req.file.filename}`
    }

    let result = await Employe.updateOne(
        { _id: req.params.id },
        {
            $set: { name: name, ability: ability, image: img }
        }
    )
    res.send(result);
})

app.use('/images', express.static('uploads/Employes'));




// =================Client

app.get('/clientCount', async (req, res) => {
    const result = await Client.find().count()
    res.send({ count: result })
})

const client = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/client/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const clientUpload = multer({ storage: client });


app.post('/addClient', clientUpload.single('image'), async (req, res) => {

    const url = req.protocol + '://' + req.get('host');

    const img = `${url}/images/${req.file.filename}`
    const name = req.body.name;

    let client = new Client({ image: img, name: name });
    let result = await client.save();
    res.send(result);
});
app.use('/images', express.static('uploads/client'));


// --display data

app.get("/client", async (req, res) => {
    let client = await Client.find();

    if (client.length > 0) {
        res.send(client)
    }
    else {
        console.warn({ result: "sorry, no client found" })
    }
})

// -----delete 

app.delete("/client/:id", async (req, res) => {
    const result = await Client.deleteOne({ _id: req.params.id })
    res.send(result);
});


// ---update 

app.get('/client/:id', async (req, res) => {
    let result = await Client.findOne({ _id: req.params.id });
    if (result) {
        res.send(result);
    }
    else {
        res.send({ result: "no data found" });
    }
});

app.put('/client/:id', clientUpload.single('image'), async (req, res) => {

    const url = req.protocol + '://' + req.get('host');
    const name = req.body.name;

    if (!req.file) {
        let result = await Client.findOne({ _id: req.params.id });
        var img = result.image
    }
    else {
        var img = `${url}/images/${req.file.filename}`
    }

    let result = await Client.updateOne(
        { _id: req.params.id },
        {
            $set: { image: img, name: name }
        }
    )
    res.send(result);
})
app.use('/images', express.static('uploads/client'));



// =================Vacancy

app.get('/vacancyCount', async (req, res) => {
    const result = await Vacancy.find().count()
    res.send({ count: result })
})

app.post('/addVacancy', async (req, res) => {
    let vacancy = new Vacancy(req.body);
    let result = await vacancy.save();
    res.send(result);
})


// --display data

app.get("/vacancy", async (req, res) => {
    let vacancy = await Vacancy.find();
    if (vacancy.length > 0) {
        res.send(vacancy)
    }
    else {
        console.warn({ result: "no vacancy found" })
    }
})

// -----delete 

app.delete("/vacancy/:id", async (req, res) => {
    const result = await Vacancy.deleteOne({ _id: req.params.id })
    res.send(result);
});

// ---update 

app.get('/vacancy/:id', async (req, res) => {
    let result = await Vacancy.findOne({ _id: req.params.id });
    if (result) {
        res.send(result);
    }
    else {
        res.send({ result: "no data found" });
    }
});

app.put('/vacancy/:id', async (req, res) => {
    let result = await Vacancy.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        }
    )
    res.send(result);
})

// =================Portfolio

app.get('/portfolioCount', async (req, res) => {
    const result = await Portfolio.find().count()
    res.send({ count: result })
})

const portfolio = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/portfolio/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const portfolioUpload = multer({ storage: portfolio });

app.post('/addProject', portfolioUpload.single('image'), async (req, res) => {
    const url = req.protocol + '://' + req.get('host');

    const img = `${url}/images/${req.file.filename}`
    const pName = req.body.pName
    const pType = req.body.pType
    const madeBy = req.body.madeBy
    const SDetail = req.body.SDetail
    const LDetail = req.body.LDetail

    let portfolio = new Portfolio({ p_name: pName, p_type: pType, image: img, made_by: madeBy, s_detail: SDetail, l_detail: LDetail, });

    let result = await portfolio.save();
    res.send(result);
})
app.use('/images', express.static('uploads/portfolio'));

// --display data

app.get("/portfolio", async (req, res) => {
    let portfolio = await Portfolio.find();
    if (portfolio.length > 0) {
        res.send(portfolio)
    }
    else {
        console.warn({ result: "sorry, no Project found" })
    }
})


// -----delete 

app.delete("/portfolio/:id", async (req, res) => {
    const result = await Portfolio.deleteOne({ _id: req.params.id })
    res.send(result);
});


// ---update 

app.get('/portfolio/:id', async (req, res) => {
    let result = await Portfolio.findOne({ _id: req.params.id });
    if (result) {
        res.send(result);
    }
    else {
        res.send({ result: "no data found" });
    }
});

app.put('/portfolio/:id', portfolioUpload.single('image'), async (req, res) => {

    const url = req.protocol + '://' + req.get('host');
    const pName = req.body.pName
    const pType = req.body.pType
    const madeBy = req.body.madeBy
    const SDetail = req.body.SDetail
    const LDetail = req.body.LDetail

    if (!req.file) {
        let result = await Portfolio.findOne({ _id: req.params.id });
        var img = result.image
    }
    else {
        var img = `${url}/images/${req.file.filename}`
    }

    let result = await Portfolio.updateOne(
        { _id: req.params.id },
        {
            $set: { p_name: pName, p_type: pType, image: img, made_by: madeBy, s_detail: SDetail, l_detail: LDetail, }
        }
    )
    res.send(result);
})
app.use('/images', express.static('uploads/portfolio'));


// ----------view

app.get("/portfolio/:id", async (req, res) => {
    let result = await Portfolio.findOne({ _id: req.params.id });
    if (result) {
        res.send(result)
    }
    else {
        res.send({ result: "no data is hear" })
    }
})


// =================contact

app.get('/contactCount', async (req, res) => {
    const result = await contact.find().count()
    res.send({ count: result })
})

app.post('/contact', async (req, res) => {
    let Contact = new contact(req.body);
    let result = await Contact.save();
    res.send(result);
})



// --display data

app.get("/contact", async (req, res) => {
    let Contact = await contact.find();
    if (Contact.length > 0) {
        res.send(Contact)
    }
    else {
        console.warn({ result: "sorry, no Contact found" })
    }
})


// -----delete 

app.delete("/contact/:id", async (req, res) => {
    const result = await contact.deleteOne({ _id: req.params.id })
    res.send(result);
});




// Connect to MongoDB
const DATABASE_URL = 'mongodb+srv://denishkunjadiya:HQdE2X8z7qdrG5rX@cluster0.o1s7rud.mongodb.net/?retryWrites=true&w=majority'
const DATABASE = 'db_aimars'

db(DATABASE_URL, DATABASE);

app.listen(5000, () => {
    console.log(`listening on http://127.0.0.1:${5000}`)
});