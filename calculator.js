var inputString=""
var inputBox=document.getElementById('input')
inputBox.value= inputString
function getValue7()
{
var n7=document.getElementById('n7').value
console.log(n7)
inputString=inputString+n7
inputBox.value=inputString

}
function getValue8()
{
var n8=document.getElementById('n8').value
console.log(n8)
inputString=inputString+n8
inputBox.value=inputString
}
function getValue9()
{
var n9=document.getElementById('n9').value
console.log(n9)
inputString=inputString+n9
inputBox.value=inputString
}
function getValuemul()
{
var mul=document.getElementById('mul').value
console.log(mul)
inputString=inputString+mul
inputBox.value=inputString

}
function getValue4()
{
var n4=document.getElementById('n4').value
console.log(n4)
inputString=inputString+n4
inputBox.value=inputString
}
function getValue5()
{
var n5=document.getElementById('n5').value
console.log(n5)
inputString=inputString+n5
inputBox.value=inputString
}
function getValue6()
{
var n6=document.getElementById('n6').value
console.log(n6)
inputString=inputString+n6
inputBox.value=inputString
}
function getValuesub()
{
var sub=document.getElementById('sub').value
console.log(sub)
inputString=inputString+sub
inputBox.value=inputString
}
function getValue1()
{
var n1=document.getElementById('n1').value
console.log(n1)
inputString=inputString+n1
inputBox.value=inputString
}
function getValue2()
{
var n2=document.getElementById('n2').value
console.log(n2)
inputString=inputString+n2
inputBox.value=inputString
}
function getValue3()
{
var n3=document.getElementById('n3').value
console.log(n3)
inputString=inputString+n3
inputBox.value=inputString
}
function getValueplus()
{
var sum=document.getElementById('sum').value
console.log(sum)
inputString=inputString+sum
inputBox.value=inputString
}
function getValue0()
{
var n0=document.getElementById('n0').value
console.log(n0)
inputString=inputString+n0
inputBox.value=inputString
}
function getValuepoint()
{
var point=document.getElementById('point').value
console.log(point)
inputString=inputString+point
inputBox.value=inputString
}
function AC()
{
    inputString=""
inputBox.value=inputString
}
function getValueequal()
{
var result=eval(inputString)
console.log(result)
inputBox.value=`${inputString}=${result}`

}