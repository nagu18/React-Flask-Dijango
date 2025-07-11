// ✅ Define the data object
const data = {
    name: 'nagu',
    age: '21',
    addr: 'hyderabad',
    skills: { 
        cyber: 'networking',
        web_dev: 'django',
    }
}

// ✅ React component
function App() {
    // ✅ Destructuring the object
    const { name, age, addr, skills } = data;

    return (
        <>
        <div>
            <h2>Name: {name}</h2>
            <h4>Address: {addr}</h4>
            <h4>Age: {age}</h4>
            <h4>Cyber Skill: {skills.cyber}</h4>
            <h4>Web Dev Skill: {skills.web_dev}</h4>
        </div>
        </>
    );
}

//simple way
function Simple(){
    const info = {
        name1:"mouli",
        age1:"24",
        Role:'devops',
        Skill:{
            Main:'SDE',
            Sec:'DevOps',
        }
    }
    const {name1, age1, Role} = info;
    const {Main, Sec} = Role;
    return (
        <>
        <div>
            <h1>Name: {name1}</h1>
            <h1>Age: {age1}</h1>
            <h1>skill: {Skill}</h1>
            <h1>Main_Skill: {Main}</h1>
            <h2>Sec_Skill: {Sec}</h2>
        </div>
        </>
    )
}