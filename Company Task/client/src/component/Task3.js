
import 'bootstrap/dist/css/bootstrap.min.css';


import { Tasks } from './Tasks';

export default function Task3(){

    function Xor(){
        var a = document.getElementById('firstnum').value;
        var b = document.getElementById('secondnum').value;
        var c = document.getElementById('thirdnum').value;
        var output = document.getElementById('output');

        if(a === '' || a === null){
            alert('enter firstnumber');
        }
        else if(b === '' || b === null || b <= a){
            alert('Enter secondno and greater than firstnum');
            document.getElementById('secondnum').value = '';
        }
        else if(c === '' || c === null){
            alert('enter thirdnum');
        }
        else{
            const a1 = a^b;
            if(a1 < c){
                output.value = a1;
                f1();
            }
            else if(a1 <= c){
                output.value = c ;
                f1();
            }
            else{
                document.getElementById('firstnum').value = '';
                document.getElementById('secondnum').value = '';
                document.getElementById('thirdnum').value = ''; 
            }
        }

    }

    function f1(){
        var thirdno = document.getElementById('thirdnum').value;
        var output = document.getElementById('output').value;
        if(output > thirdno){
            document.getElementById('firstnum').value = '';
            document.getElementById('secondnum').value = '';
            document.getElementById('thirdnum').value = '';  
            document.getElementById('output').value = '';    
        } 
    }
    

    return(
        <>
        <Tasks/>
        <div className="container" >
            <div className="row">
                <div className="col-lg-12">
                    
                </div>
            </div>
        </div>
        <div className="container mt-2">
            <div className="row">
                <div className="col-lg-12">
                <p className="text-center"><b>Bit Logic</b></p>
                </div>
            </div>
        </div>
        <div className="container mt-2">
            <div className="row">
                <div className="col-lg-4">&nbsp;</div>
                <div className="col-lg-4">
                    <input type="number" name="firstnum" id="firstnum" className="form-control " placeholder='First number'/>
                    <input type="number" name="secondnum" id="secondnum" className="form-control Task3-input" placeholder='Second number'/>
                    <input type="number" name="thirdnum" id="thirdnum" className="form-control Task3-input" placeholder='Third number'/>
                    <input type="number" name="output" id="output" className="form-control Task3-input" readOnly placeholder='Output'/>
                    <button type="button" name="data_submit" id="data_submit" value="submit" className="btn mt-1 task3-btn"
                    onClick={Xor}>
                        Click
                    </button>
                </div>
                <div className="col-lg-4">&nbsp;</div>
            </div>
        </div>
        </>
    )
}