

const Footer =(props)=>
{
    return(
        <div>
           
            {/* <hr/> */}
            <footer>
    <center>
    <h4>  &copy; Movies Anywhere. All Rights Reserved.{props.year} {props.month}</h4>
    </center>
            </footer>
 
        </div>
    );
};

export default Footer;