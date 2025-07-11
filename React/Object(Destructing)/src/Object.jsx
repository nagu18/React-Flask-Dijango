// ✅ Sample data object with nested 'skills'
const data = {
    name: 'nagu',
    age: '21',
    addr: 'hyderabad',
    skills: { 
        cyber: 'networking',
        web_dev: 'django',
    }
};

// ✅ React Component: Obj
function Obj() {
    /*
    ✅ Destructuring the top-level keys from the data object
    This line:
        const { name, age, addr, skills } = data;
    does the same as:
        const name = data.name;
        const age = data.age;
        const addr = data.addr;
        const skills = data.skills;
    */

    const { name, age, addr, skills } = data;

    /*
    ✅ Accessing nested properties using dot notation:
        skills.cyber → "networking"
        skills.web_dev → "django"
    */

    return (
        <>
        <div>
            {/* ✅ Rendering the destructured values */}
            <h2>Name: {name}</h2>
            <h4>Address: {addr}</h4>
            <h4>Age: {age}</h4>
            <h4>Cyber Skill: {skills.cyber}</h4>
            <h4>Web Dev Skill: {skills.web_dev}</h4>
        </div>
        </>
    );
}

// ✅ Another component: Simple
function Simple() {
    // ✅ Define nested object
    const info = {
        name1: "mouli",
        age1: "24",
        Role: 'devops',
        Skill: {
            Main: 'SDE',
            Sec: 'DevOps',
        }
    };

    /*
    ✅ Destructuring top-level and nested objects:
        const {name1, age1, Role, Skill} = info;
        const {Main, Sec} = Skill;

    This allows direct access to Main and Sec skills
    */

    const { name1, age1, Role, Skill } = info;
    const { Main, Sec } = Skill;

    return (
        <>
        <div>
            <h1>Name: {name1}</h1>
            <h1>Age: {age1}</h1>
            <h1>Role: {Role}</h1>
            <h1>Main Skill: {Main}</h1>
            <h2>Secondary Skill: {Sec}</h2>
        </div>
        </>
    );
}

// ✅ Only one default export allowed per file
export default Obj;

// ✅ Named export for other components
export { Simple };