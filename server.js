require( './Config/config' );
const express = require( 'express' );
const router=require('./Router/route')

PORT = 1091;
const app = express();
app.use( express.json() );
// app.use( '/uploads', express.static( "uploads" ) )

app.get('/', (req, res)=>{
     res.send('Hello World');
})

app.use('/api', router)

app.listen( PORT, () => { 
    console.log(`listening to port: ${PORT}`)
}) 