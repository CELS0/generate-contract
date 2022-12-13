import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Container, Main, Button, Input, Title, Content } from "./styles.js";
import { Document, Packer } from "docx";
import { saveAs } from "file-saver";

function App() {
  const [resre, setJABSF] = useState("564654");
  const [ownerName, setOwnerName] = useState("");
  const [rg, setRg] = useState("");
  const [cpf, setCpf] = useState("");
  const [genre, setGenre] = useState("");
  const [address, setAddress] = useState("");
  const [civil, setCivil] = useState("");
  const [lote, setLote] = useState("");
  const [block, setBlock] = useState("");

  function saveDocumentToFile(doc, fileName) {
    const packer = new Packer();
    const mimeType =
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    packer.toBlob(doc).then((blob) => {
      const docblob = blob.slice(0, blob.size, mimeType);
      saveAs(docblob, fileName);
    });
  }

  function generateWordDocument(event) {
    event.preventDefault();
    let doc = new Document();
    doc.theme = {
      font: {
        normal: {
          family: "Calibri",
          color: "303856",
        },
        header: { family: "Calibri Light" },
      },
      title: {
        color: "4ABDAC",
      },
      headings: {
        one: {
          color: "FC4A1A",
        },
        two: {
          color: "F7B733",
        },
      },
    };
    doc.Styles.createParagraphStyle("customHeading1", "Custom Heading 1")
      .basedOn("Heading 1")
      .next("Normal")
      .quickFormat()
      .font(doc.theme.font.header.family)
      .size(32)
      .bold()
      .color(doc.theme.headings.one.color)
      .spacing({ after: 250 });
    doc.Styles.createParagraphStyle("customHeading2", "Custom Heading 2")
      .basedOn("Heading 2")
      .next("Normal")
      .quickFormat()
      .font(doc.theme.font.header.family)
      .size(26)
      .bold()
      .color(doc.theme.headings.two.color)
      .spacing({ after: 150 });
    doc.Styles.createParagraphStyle("customTitle", "Custom Title")
      .basedOn("Title")
      .next("Normal")
      .quickFormat()
      .font(doc.theme.font.header.family)
      .size(56)
      .bold()
      .color(doc.theme.font.normal.color)
      .spacing({ after: 250 });
    doc.Styles.createParagraphStyle("customSubtitle", "Custom Subtitle")
      .basedOn("Subtitle")
      .next("Normal")
      .quickFormat()
      .font(doc.theme.font.header.family)
      .size(22)
      .color(doc.theme.font.normal.color)
      .spacing({ after: 150 });
    setOwnerName;
    doc.Styles.createParagraphStyle("customNormal", "Custom Normal")
      .basedOn("Normal")
      .quickFormat()
      .font(doc.theme.font.normal.family)
      .size(20)
      .color(doc.theme.font.normal.color)
      .spacing({ after: 150 });
    doc.createParagraph("Title").style("customTitle");
    doc
      .createParagraph(
        "VENDEDORES: Gedeon Belmiro Dourado Filho, brasileiro, casado, maior, bombeiro militar, RG: 2148661 SSP/DF, CPF: 001.403.975-31 e sua esposa, a Sra. Maiara Raissa Ribeiro Nunes Dourado, RG: 1305482786 SSP/BA, CPF: 029.959.355-07, brasileira, casada, maior, bombeira militar, residentes e domiciliados na Rua 7 de setembro, n° 10, Sitio do Mato - Bahia; "
      )
      .style("customNormal");
    doc
      .createParagraph(
        `COMPRADOR: ${ownerName}, ${
          rg === "" ? "" : `RG: ${rg}, `
        }CPF: ${cpf}, ${genre}, maior, ${civil}, residente e domiciliado na ${address}. `
      )
      .style("customNormal");
    doc
      .createParagraph(
        "As partes acima identificadas têm, entre si, justo e acertado o presente Contrato de Compra e Venda de Terreno a Prazo, que se regerá pelas cláusulas seguintes e pelas condições descritas no presente. "
      )
      .style("customNormal");

    doc
      .createParagraph(
        `Cláusula 1ª. O presente contrato tem como OBJETO a venda do terreno denominado LOTE ${lote} DA QUADRA ${block}, com as seguintes medidas 10 x 30 metros, perfazendo uma área de 300 metros quadrados, situado no Loteamento Alto do Umbuzeiro, Cep: 47610-000, Cidade Sítio do Mato, no Estado da Bahia, desmembrado da Fazenda Canindé, Estrada Sítio do Mato/Traíras, Identificação CIB 7.032.701-7 de propriedade dos vendedores.`
      )
      .style("customNormal");

    doc
      .createParagraph(
        "Cláusula 2ª. O COMPRADOR se responsabilizará pelo pagamento dos impostos, taxas e despesas que incidam sobre o terreno a partir do momento em que for assinado este contrato, mesmo que o lançamento seja feito em nome do VENDEDOR ou de terceiros."
      )
      .style("customNormal");

    doc
      .createParagraph(
        "Cláusula 3ª. O COMPRADOR se responsabilizará pelas despesas com a transcrição do imóvel, a ser realizada quando da total quitação das parcelas acertadas neste instrumento."
      )
      .style("customNormal");

    doc
      .createParagraph(
        "Cláusula 4ª. A posse do terreno passará ao COMPRADOR quando da assinatura deste instrumento até o momento em que todas as parcelas estejam quitadas. "
      )
      .style("customNormal");

    doc
      .createParagraph(
        "Cláusula 5ª. Quando da assinatura deste contrato, o VENDEDOR disponibilizará o terreno ao COMPRADOR livre de coisas que impeçam a livre fruição da posse por este último."
      )
      .style("customNormal");

    doc
      .createParagraph(
        "Cláusula 6ª. É vedado ao COMPRADOR, na vigência deste contrato e até que todas as parcelas estejam quitadas, a divisão ou fracionamento do terreno em módulos, lotes ou qualquer tipo de divisão, assim como a cessão, venda ou alienação, a título oneroso ou gratuito, das referidas frações de terreno pelo ora COMPRADOR, devendo respeitar, na vigência do contrato ou após quitadas as parcelas, o direito de preferência dos VENDEDORES na recompra do terreno, na forma da lei.  "
      )
      .style("customNormal");

    doc
      .createParagraph(
        "Cláusula 7ª. Caso alguma das partes não cumpra o disposto nas cláusulas estabelecidas neste instrumento, responsabilizar-se-á pelo pagamento de multa equivalente a 10% do valor da venda do terreno."
        )
      .style("customNormal");

    saveDocumentToFile(doc, `${resre}.docx`);
  }

  return (
    <Container>
      <Main>
        <Content>
          <Title>Nome do Proprietário:</Title>
          <Input onChange={(e) => setOwnerName(e.target.value)} />
        </Content>
        <Content>
          <Title>CPF:</Title>
          <Input onChange={(e) => setCpf(e.target.value)} />
        </Content>
        <Content>
          <Title>RG: </Title>
          <Input onChange={(e) => setRg(e.target.value)} />
        </Content>
        <Content>
          <Title>Gênero: </Title>
          <select name="select" onChange={(e) => setGenre(e.target.value)}>
            <option value="brasileiro">Masculino</option>
            <option value="brasileira">Feminino</option>
          </select>
        </Content>
        <Content>
          <Title>Estado Civil: </Title>
          <select name="select" onChange={(e) => setCivil(e.target.value)}>
            <option value={genre === "brasileiro" ? "solteiro" : "solteira"}>
              Solteiro
            </option>
            <option value={genre === "brasileiro" ? "casado" : "casada"}>
              Casado
            </option>
            <option value="união estável">União Estável</option>
          </select>
        </Content>
        <Content>
          <Title>Residência: </Title>
          <Input onChange={(e) => setAddress(e.target.value)} />
        </Content>
        <Content>
          <Title>Lote:</Title>
          <Input onChange={(e) => setLote(e.target.value)} />
        </Content>
        <Content>
          <Title>Quadra:</Title>
          <Input onChange={(e) => setBlock(e.target.value)} />
        </Content>
        <Button onClick={generateWordDocument}>GERAR CONTRATO {genre}</Button>
      </Main>
    </Container>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
