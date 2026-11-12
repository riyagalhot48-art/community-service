const PDFDocument = require("pdfkit");

router.get("/certificate/:name",
(req,res)=>{

const doc = new PDFDocument();

res.setHeader(
"Content-Type",
"application/pdf"
);

doc.pipe(res);

doc.fontSize(28)
.text("Certificate of Completion",100,100);

doc.fontSize(20)
.text(
`Awarded to ${req.params.name}`,
100,
180
);

doc.end();

});
