//VLSM
//CIDR notation /8 /16 /24
//27 /26
//prefix of the 5th subnetwork:sum the diference of the total bits and the VLSM sufix

const pswd = document.getElementById("pswd")
const username = document.getElementById("username")
const email = document.getElementById("email")

const validate = () => {
    let pswd_v = pswd.value
    let usern_v = username.value
    let email_v = email.value

    console.log(`Get ${pswd_v} ${usern_v} ${email_v}`)

    //const phoneRGEX = /^[(]?0?[0-9][0-9][)]?\s?9?[0-9]{4}(-|\s)?[0-9]{4}/

    //let phon_result = phoneRGEX.test(pswd_v) maybe util later

    const usernRGEX = /^[a-zA-Z]+$/
    const pswdRGEX = /^(?=.*[A-Z]){5}(?=.*[!@#$%^&*]){6}(?=.*[-]){2}.*$/
    const emailRGEX = /^[A-Za-z0-9]+(@gmail.com)$/

    let pswd_result = pswdRGEX.test(pswd_v)
    let usern_result = usernRGEX.test(usern_v)
    let email_result = emailRGEX.test(email_v)

    console.log(`${pswd_result} ${usern_result}  ${email_result}`)
}