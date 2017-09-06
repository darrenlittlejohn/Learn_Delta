class RegistrationStore{
  constructor(){
    this.fields = {
      firstName:'',
      lastName:'',
      email:'',
      password:''
    }
  }

  getFields(){
    return this.fields
  }


  getErrors(){
  return this.errors

  }

  validate(){
    this.errors = {}
    this.validatePresence('firstName')
    this.validatePresence('lastName')
    this.validatePassword('password')
    this.validateEmail('email')

  }

  validatePresence(fieldName){
    if(this.fields[fieldName] === ''){
      this.addError(fieldName, 'is Required')
    }
  }


  validateEmail(fieldName){
    const filter = /^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/
    if(!filter.test(this.fields[fieldName])){
      this.addError(fieldName, 'is not an email')
    }
  }
      
  validatePassword(fieldName){
    const filter = /^[A-Za-z]\w{7,14}$/
    if(!filter.test(this.fields[fieldName])){
      this.addError(fieldName, 'Please make your password at least 8 characters')
    }
  }
 

  addError(fieldName, message){
    this.errors[fieldName] = message
  }
}
const store = new RegistrationStore()
export default store

