import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  Container,
  Main,
  Button,
  Input,
  Title,
  Content,
  ContentRow,
} from "./styles.js";
import { Document, Packer } from "docx";
import { saveAs } from "file-saver";

function App() {
  const [checked, setChecked] = useState(true);
  const [ownerName, setOwnerName] = useState("");
  const [rg, setRg] = useState("");
  const [cpf, setCpf] = useState("");
  const [genre, setGenre] = useState("brasileiro");
  const [address, setAddress] = useState("");
  const [civil, setCivil] = useState("brasileiro");
  const [lote, setLote] = useState("");
  const [block, setBlock] = useState("");
  const [width, setWidth] = useState("");
  const [size, setSize] = useState("");
  const [frente, setFrente] = useState("");
  const [fundo, setFundo] = useState("");
  const [medida01, setMedida01] = useState("");
  const [medida02, setMedida02] = useState("");
  const [block01, setBlock01] = useState("");
  const [block02, setBlock02] = useState("");
  const [lote01, setLote01] = useState("");
  const [lote02, setLote02] = useState("");

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
    doc.Styles.createParagraphStyle("customTitle", "Custom Title")
      .basedOn("Title")
      .next("Normal")
      .quickFormat()
      .font(doc.theme.font.header.family)
      .size(56)
      .bold()
      .color(doc.theme.font.normal.color)
      .spacing({ after: 250 });
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
    {
      checked
        ? doc
            .createParagraph(
              `Cláusula 1ª. O presente contrato tem como OBJETO a venda do terreno denominado LOTE ${lote} DA QUADRA ${block}, com as seguintes medidas ${width} x ${size} metros, perfazendo uma área de ${
                width * size
              } metros quadrados, situado no Loteamento Alto do Umbuzeiro, Cep: 47610-000, Cidade Sítio do Mato, no Estado da Bahia, desmembrado da Fazenda Canindé, Estrada Sítio do Mato/Traíras, Identificação CIB 7.032.701-7 de propriedade dos vendedores.`
            )
            .style("customNormal")
        : doc
            .createParagraph(
              `Cláusula 1ª. O presente contrato tem como OBJETO a venda do terreno denominado LOTE ${lote} DA QUADRA ${block}, com as seguintes medidas ${frente} metros de frente, ${fundo} metros de fundo, ${medida01} metros na divisa com o lote ${lote01} da QD ${block01} e ${medida02} metros na divisa com o lote ${lote02} da QD ${block02}, situado no Loteamento Alto do Umbuzeiro, Cep: 47610-000, Cidade Sítio do Mato, no Estado da Bahia, desmembrado da Fazenda Canindé, Estrada Sítio do Mato/Traíras, Identificação CIB 7.032.701-7 de propriedade dos vendedores.`
            )
            .style("customNormal");
    }

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

    saveDocumentToFile(
      doc,
      `LOTE ${lote} QUADRA ${block} CONTRATO DE COMPRA E VENDA DE TERRENO ${ownerName}.docx`
    );
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
        <ContentRow>
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
        </ContentRow>
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
        <Content>
          <Title>Medidas corretas: </Title>
          <Input
            type="checkbox"
            checked={checked}
            onChange={() => {
              setChecked(!checked);
            }}
          />
        </Content>
        {checked ? (
          <>
            <Content>
              <Title>Largura:</Title>
              <Input onChange={(e) => setWidth(e.target.value)} />
            </Content>
            <Content>
              <Title>Comprimento:</Title>
              <Input onChange={(e) => setSize(e.target.value)} />
            </Content>
          </>
        ) : (
          <>
            <Content>
              <Title>Frente:</Title>
              <Input onChange={(e) => setFrente(e.target.value)} />
            </Content>
            <Content>
              <Title>Fundo:</Title>
              <Input onChange={(e) => setFundo(e.target.value)} />
            </Content>
            <Content>
              <Title>Divisa 01:</Title>
              <Input onChange={(e) => setMedida01(e.target.value)} />
            </Content>
            <Content>
              <Title>Quandra lado 01:</Title>
              <Input onChange={(e) => setBlock01(e.target.value)} />
            </Content>
            <Content>
              <Title>Lote 01:</Title>
              <Input onChange={(e) => setLote01(e.target.value)} />
            </Content>
            <Content>
              <Title>Divisa 02:</Title>
              <Input onChange={(e) => setMedida02(e.target.value)} />
            </Content>
            <Content>
              <Title>Quandra lado 02:</Title>
              <Input onChange={(e) => setBlock02(e.target.value)} />
            </Content>
            <Content>
              <Title>Lote 02:</Title>
              <Input onChange={(e) => setLote02(e.target.value)} />
            </Content>
          </>
        )}
        <Button onClick={generateWordDocument}>GERAR CONTRATO</Button>
      </Main>
    </Container>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
