/**
 * Set the id to query the report
 */
 
 fetch(`http://127.0.0.1:5000/report`)
     .then(response => response.json())
     .then(report => {
        console.log(report);
         let template = createRowTemplate(report);
         $("#report").append(template);
     });
 
 /**
  * Find the template tag and populate it with the data
  * @param report
  */
 function createRowTemplate(report) {
     let template = $("#report-template")[0].innerHTML;
     return Mustache.render(template, report);
 }
 