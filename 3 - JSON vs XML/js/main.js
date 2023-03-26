/*
 JSON is Like XML Because
    - Both JSON and XML are "self describing" (human readable)
    - Both JSON and XML are hierarchical (values within values)
    - Both JSON and XML can be parsed and used by lots of programming languages
    - Both JSON and XML can be fetched with an XMLHttpRequest // ajax request
JSON is Unlike XML Because
    - JSON doesn't use end tag
    - JSON is shorter
    - JSON is quicker to read and write
    - JSON can use arrays


# The biggest difference is:

   - XML has to be parsed with an XML parser. JSON can be parsed by a standard JavaScript function.

# Why JSON is Better Than XML
   - XML is much more difficult to parse than JSON.
   - JSON is parsed into a ready-to-use JavaScript object.

For AJAX applications, JSON is faster and easier than XML:

* Using XML

    Fetch an XML document
    Use the XML DOM to loop through the document
    Extract values and store in variables


* Using JSON

    Fetch a JSON string
    JSON.Parse the JSON string
*/

// XML Example
/*
<ahmed>
    <name>ahmed</name>
    <age>20</age>
    <skills>
        <skill>html</skill>
        <skill>css</skill>
        <skill>js</skill>
    </skills>
</ahmed>
*/

// Object Example
let ObjExample = {
    name: "ahmed",
    age: 20,
    skills: ["html", "css", "js"]
};

// JSON Format
let jsonExample = JSON.stringify(ObjExample);

console.log(ObjExample); //object name and value
console.log(jsonExample); //string