import React from "react";
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    display:"flex",
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    padding: 20,
  },
  view: {
    border: "1px solid gray",
    padding:10
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  first: {
    backgroundColor:"gray",
    padding:10,
    color:"black"
  }
});

function PdfDocument() {
  return (
    <Document style={styles.document}>
      <Page size="A4" style={styles.page}>
        <View style={styles.first}>
          Title
        </View>
        <View style={styles.view}>
          Hello
        </View>
        <View style={styles.first}>
          Title
        </View>
      </Page>
    </Document>
  );
}

function App() {
  return (
    <div style={{height:"1000px"}}>
      <center><h1>Your Bill</h1></center>
      <PDFDownloadLink document={<PdfDocument />} fileName="Tablemate Bill.pdf">
        {({ loading }) => (loading ? <button >Loading...</button> : <button style={{position:"fixed", bottom:"10%"}}> Download</button>)}
      </PDFDownloadLink>
      <PdfDocument />

    </div>
  );
}

export default App;
