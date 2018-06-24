const express=require('express');
const hbs=require('hbs');

var app=express();

hbs.registerPartials(__dirname+'/views/partials');
hbs.registerHelper('getCurrentYear',()=>{
	return new Date().getFullYear();
	//return 'hello';
});


app.use((req,res,next)=>{
next();
	
});


app.use(express.static(__dirname+'/public'));

hbs.registerHelper('ScreamIt',(text)=>{
	return text.toUpperCase();
});
app.set('view engine','hbs');

app.listen(3000,()=>{
	console.log("Server is listening to port 3000....");
	//console.log(__dirname);
});

app.get('/',(req,res)=>{
	res.render('home.hbs',{
		pageTitle:'Homepage',
		welcomeMessage:'Welcome to my website'
	});
});

app.get('/bad',(req,res)=>{
	res.send({
		errorMessage:'Server unable to connect'
	});
});

app.get('/about',(req,res)=>{
	res.render('about.hbs',{
		pageTitle:'This is about page'
	});
});