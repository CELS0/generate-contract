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
  TitleMedida,
  TitleGenre,
} from "./styles.js";
import { Document, Packer } from "docx";
import { saveAs } from "file-saver";
import { BiArrowToRight, BiArrowToLeft } from "react-icons/bi";

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
  const [step, setStep] = useState(1);
  const [price, setPrice] = useState("");
  const [priceDescriptions, setPriceDescriptions] = useState("");
  const [installments, setInstallmentse] = useState("");
  const [priceInstallments, setPriceInstallmentse] = useState("");
  const [installmentsDescriptions, setInstallmentsDescriptions] = useState("");
  const [priceStart, setPriceStart] = useState("");
  const [priceStartDescriptions, setPriceStartDescriptions] = useState("");
  const [date, setDate] = useState("");
  const [datePrice, setDatePrice] = useState("");
  const [datePriceDescriptions, setDatePriceDescriptions] = useState("");

  const [
    installmentsDescriptionsRestante,
    setInstallmentsDescriptionsRestante,
  ] = useState("");

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
          family: "Times New Roman Bold",
          color: "#0000",
        },
        header: { family: "Times New Roman Bold" },
      },
      title: {
        color: "#0000",
      },
      headings: {
        one: {
          color: "#0000",
        },
        two: {
          color: "#0000",
        },
      },
    };
    doc.Styles.createParagraphStyle("customTitle", "Custom Title")
      .basedOn("Title")
      .next("Normal")
      .quickFormat()
      .font(doc.theme.font.header.family)
      .size(24)
      .bold()
      .color(doc.theme.font.normal.color)
      .spacing({ after: 250, before: 250 });
    doc.Styles.createParagraphStyle("customNormal", "Custom Normal")
      .basedOn("Normal")
      .quickFormat()
      .justified()
      .font(doc.theme.font.normal.family)
      .size(24)
      .color(doc.theme.font.normal.color)
      .spacing({ after: 150 });
    doc.Styles.createParagraphStyle("customNormalBold", "Custom Normal Bold")
      .basedOn("Normal")
      .quickFormat()
      .justified()
      .bold()
      .font(doc.theme.font.normal.family)
      .size(24)
      .color(doc.theme.font.normal.color);
    doc
      .createParagraph("CONTRATO DE COMPRA E VENDA DE TERRENO A PRAZO")
      .style("customTitle")
      .center();
    doc
      .createParagraph(
        "VENDEDORES: Gedeon Belmiro Dourado Filho, brasileiro, casado, maior, bombeiro militar, RG: 2148661 SSP/DF, CPF: 001.403.975-31 e sua esposa, a Sra. Maiara Raissa Ribeiro Nunes Dourado, RG: 1305482786 SSP/BA, CPF: 029.959.355-07, brasileira, casada, maior, bombeira militar, residentes e domiciliados na Rua 7 de setembro, n?? 10, Sitio do Mato - Bahia; "
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
        "As partes acima identificadas t??m, entre si, justo e acertado o presente Contrato de Compra e Venda de Terreno a Prazo, que se reger?? pelas cl??usulas seguintes e pelas condi????es descritas no presente. "
      )
      .style("customNormal");
    {
      checked
        ? doc
            .createParagraph(
              `Cl??usula 1??. O presente contrato tem como OBJETO a venda do terreno denominado LOTE ${lote} DA QUADRA ${block}, com as seguintes medidas ${width} x ${size} metros, perfazendo uma ??rea de ${
                width * size
              } metros quadrados, situado no Loteamento Alto do Umbuzeiro, Cep: 47610-000, Cidade S??tio do Mato, no Estado da Bahia, desmembrado da Fazenda Canind??, Estrada S??tio do Mato/Tra??ras, Identifica????o CIB 7.032.701-7 de propriedade dos vendedores.`
            )
            .style("customNormal")
        : doc
            .createParagraph(
              `Cl??usula 1??. O presente contrato tem como OBJETO a venda do terreno denominado LOTE ${lote} DA QUADRA ${block}, com as seguintes medidas ${frente} metros de frente, ${fundo} metros de fundo, ${medida01} metros na divisa com o lote ${lote01} da QD ${block01} e ${medida02} metros na divisa com o lote ${lote02} da QD ${block02}, situado no Loteamento Alto do Umbuzeiro, Cep: 47610-000, Cidade S??tio do Mato, no Estado da Bahia, desmembrado da Fazenda Canind??, Estrada S??tio do Mato/Tra??ras, Identifica????o CIB 7.032.701-7 de propriedade dos vendedores.`
            )
            .style("customNormal");
    }

    doc
      .createParagraph(
        "Cl??usula 2??. O COMPRADOR se responsabilizar?? pelo pagamento dos impostos, taxas e despesas que incidam sobre o terreno a partir do momento em que for assinado este contrato, mesmo que o lan??amento seja feito em nome do VENDEDOR ou de terceiros."
      )
      .style("customNormal");

    doc
      .createParagraph(
        "Cl??usula 3??. O COMPRADOR se responsabilizar?? pelas despesas com a transcri????o do im??vel, a ser realizada quando da total quita????o das parcelas acertadas neste instrumento."
      )
      .style("customNormal");

    doc
      .createParagraph(
        "Cl??usula 4??. A posse do terreno passar?? ao COMPRADOR quando da assinatura deste instrumento at?? o momento em que todas as parcelas estejam quitadas. "
      )
      .style("customNormal");

    doc
      .createParagraph(
        "Cl??usula 5??. Quando da assinatura deste contrato, o VENDEDOR disponibilizar?? o terreno ao COMPRADOR livre de coisas que impe??am a livre frui????o da posse por este ??ltimo."
      )
      .style("customNormal");

    doc
      .createParagraph(
        "Cl??usula 6??. ?? vedado ao COMPRADOR, na vig??ncia deste contrato e at?? que todas as parcelas estejam quitadas, a divis??o ou fracionamento do terreno em m??dulos, lotes ou qualquer tipo de divis??o, assim como a cess??o, venda ou aliena????o, a t??tulo oneroso ou gratuito, das referidas fra????es de terreno pelo ora COMPRADOR, devendo respeitar, na vig??ncia do contrato ou ap??s quitadas as parcelas, o direito de prefer??ncia dos VENDEDORES na recompra do terreno, na forma da lei.  "
      )
      .style("customNormal");

    doc
      .createParagraph(
        "Cl??usula 7??. Caso alguma das partes n??o cumpra o disposto nas cl??usulas estabelecidas neste instrumento, responsabilizar-se-?? pelo pagamento de multa equivalente a 10% do valor da venda do terreno."
      )
      .style("customNormal");

    doc
      .createParagraph(
        `Cl??usula 8??. Por for??a deste {instrumento}, o COMPRADOR pagar?? aos VENDEDORES
        a quantia de R$ ${price},00 (${priceDescriptions}), dividida em ${installments} (${installmentsDescriptions}) parcelas, sendo a primeira, como entrada, no valor de R$ ${priceStart}
        (${priceStartDescriptions}) pago dia ${date}, e o restante em ${
          installments - 1
        } (${installmentsDescriptionsRestante})parcelas no valor de R$ ${priceInstallments},00 (DUZENTOS REAIS), a serem pagas todo dia ${datePrice} (${datePriceDescriptions})
        de cada m??s at?? a quita????o de todas as presta????es.`
      )
      .style("customNormalBold");

    doc
      .createParagraph(
        "Cl??usula 9??. O pagamento dever?? ser feito pelo COMPRADOR, ou por procurador por este constitu??do, na resid??ncia dos VENDEDORES, situada na Rua 7 de setembro, n?? 10, Sitio do Mato - Bahia, ou em conta corrente ou PIX indicada pelos VENDEDORES."
      )
      .style("customNormal");

    doc
      .createParagraph(
        "Cl??usula 10??. O presente contrato ser?? rescindido 60 (sessenta) dias ap??s o COMPRADOR deixar de pagar qualquer das parcelas pactuadas neste instrumento, na data do vencimento, perdendo este, desde j??, a posse do terreno, n??o tendo direito a ser ressarcido pelas benfeitorias voluptu??rias."
      )
      .style("customNormal");
    doc
      .createParagraph(
        "Cl??usula 11??. Em caso de desist??ncia imotivada do COMPRADOR, em qualquer fase de vig??ncia do presente contrato, os VENDEDORES ficam autorizados a reter 30% (trinta por cento) do valor atualizado dos valores efetivamente pagos."
      )
      .style("customNormal");
    doc
      .createParagraph(
        "Cl??usula 12??. O presente contrato passa a valer a partir da assinatura pelas partes, obrigando-se a ele os herdeiros ou sucessores das mesmas."
      )
      .style("customNormal");
    doc
      .createParagraph(
        "Cl??usula 13??. Para dirimir quaisquer controv??rsias oriundas do CONTRATO, as partes elegem o foro da comarca de Bom Jesus da Lapa-Bahia;"
      )
      .style("customNormal");
    doc
      .createParagraph(
        "Por estarem assim justos e contratados, firmam o presente instrumento, em duas vias de igual teor. Dado e passado na cidade de S??tio do Mato, Estado da Bahia, aos 29/07/2022 (vinte enove de julho de 2022)."
      )
      .style("customNormal");

    doc.createParagraph().style("customNormal");

    doc.createParagraph("VENDEDORES:").style("customNormal");

    doc
      .createParagraph(
        "GEDEON BELMIRO DOURADO FILHO: _____________________________________"
      )
      .style("customNormal");
    doc
      .createParagraph(
        "MAIARA RAISSA RIBEIRO NUNES DOURADO: ______________________________"
      )
      .style("customNormal");

    doc.createParagraph().style("customNormal");

    doc
      .createParagraph(`COMPRADOR: ${ownerName.toUpperCase()}`)
      .style("customNormal");
    doc
      .createParagraph(
        "_________________________________________________________________________"
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
        {step === 1 && (
          <>
            <Content>
              <Title>Nome do Propriet??rio:</Title>
              <Input
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
              />
            </Content>
            <Content>
              <Title>CPF:</Title>
              <Input value={cpf} onChange={(e) => setCpf(e.target.value)} />
            </Content>
            <Content>
              <Title>RG: </Title>
              <Input value={rg} onChange={(e) => setRg(e.target.value)} />
            </Content>
            <ContentRow>
              <Content>
                <TitleGenre>G??nero: </TitleGenre>
                <select
                  name="select"
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                >
                  <option value="brasileiro">Masculino</option>
                  <option value="brasileira">Feminino</option>
                </select>
              </Content>
              <Content>
                <Title>Estado Civil: </Title>
                <select
                  value={civil}
                  name="select"
                  onChange={(e) => setCivil(e.target.value)}
                >
                  <option
                    value={genre === "brasileiro" ? "solteiro" : "solteira"}
                  >
                    Solteiro
                  </option>
                  <option value={genre === "brasileiro" ? "casado" : "casada"}>
                    Casado
                  </option>
                  <option value="uni??o est??vel">Uni??o Est??vel</option>
                </select>
              </Content>
            </ContentRow>
            <Content>
              <Title>Resid??ncia: </Title>
              <Input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Content>
            <Content>
              <Title>Lote:</Title>
              <Input value={lote} onChange={(e) => setLote(e.target.value)} />
            </Content>
            <Content>
              <Title>Quadra:</Title>
              <Input value={block} onChange={(e) => setBlock(e.target.value)} />
            </Content>
          </>
        )}

        {step === 2 && (
          <>
            <ContentRow>
              <TitleMedida>Medidas corretas: </TitleMedida>
              <Input
                type="checkbox"
                checked={checked}
                value={checked}
                onChange={() => {
                  setChecked(!checked);
                }}
              />
            </ContentRow>
            <>
              {checked ? (
                <>
                  <Content>
                    <Title>Largura:</Title>
                    <Input
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                    />
                  </Content>
                  <Content>
                    <Title>Comprimento:</Title>
                    <Input
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                    />
                  </Content>
                </>
              ) : (
                <>
                  <Content>
                    <Title>Frente:</Title>
                    <Input
                      value={frente}
                      onChange={(e) => setFrente(e.target.value)}
                    />
                  </Content>
                  <Content>
                    <Title>Fundo:</Title>
                    <Input
                      value={fundo}
                      onChange={(e) => setFundo(e.target.value)}
                    />
                  </Content>
                  <Content>
                    <Title>Divisa 01:</Title>
                    <Input
                      value={medida01}
                      onChange={(e) => setMedida01(e.target.value)}
                    />
                  </Content>
                  <Content>
                    <Title>Quandra lado 01:</Title>
                    <Input
                      value={block01}
                      onChange={(e) => setBlock01(e.target.value)}
                    />
                  </Content>
                  <Content>
                    <Title>Lote 01:</Title>
                    <Input
                      value={lote01}
                      onChange={(e) => setLote01(e.target.value)}
                    />
                  </Content>
                  <Content>
                    <Title>Divisa 02:</Title>
                    <Input
                      value={medida02}
                      onChange={(e) => setMedida02(e.target.value)}
                    />
                  </Content>
                  <Content>
                    <Title>Quandra lado 02:</Title>
                    <Input
                      value={block02}
                      onChange={(e) => setBlock02(e.target.value)}
                    />
                  </Content>
                  <Content>
                    <Title>Lote 02:</Title>
                    <Input
                      value={lote02}
                      onChange={(e) => setLote02(e.target.value)}
                    />
                  </Content>
                </>
              )}
            </>
          </>
        )}

        {step === 3 && (
          <>
            <Content>
              <Title>Pre??o:</Title>
              <Input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Content>
            <Content>
              <Title>Pre??o escrito:</Title>
              <Input
                value={priceDescriptions}
                onChange={(e) => setPriceDescriptions(e.target.value)}
              />
            </Content>
            <Content>
              <Title>Valor das parcelas: </Title>
              <Input
                value={priceInstallments}
                onChange={(e) => setPriceInstallmentse(e.target.value)}
              />
            </Content>
            <Content>
              <Title>Parcelas: </Title>
              <Input
                value={installments}
                onChange={(e) => setInstallmentse(e.target.value)}
              />
            </Content>
            <Content>
              <Title>Parcelas escrita: </Title>
              <Input
                value={installmentsDescriptions}
                onChange={(e) => setInstallmentsDescriptions(e.target.value)}
              />
            </Content>
            <Content>
              <Title>Valor de entrada: </Title>
              <Input
                value={priceStart}
                onChange={(e) => setPriceStart(e.target.value)}
              />
            </Content>
            <Content>
              <Title>Valor de entrada escrito: </Title>
              <Input
                value={priceStartDescriptions}
                onChange={(e) => setPriceStartDescriptions(e.target.value)}
              />
            </Content>
            <Content>
              <Title>Data:</Title>
              <Input
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Content>
            <Content>
              <Title>N??mero de parcelas restante escrita:</Title>
              <Input
                value={installmentsDescriptionsRestante}
                onChange={(e) =>
                  setInstallmentsDescriptionsRestante(e.target.value)
                }
              />
            </Content>
            <Content>
              <Title>Dia dos pagametos:</Title>
              <Input  value={datePrice} onChange={(e) => setDatePrice(e.target.value)} />
            </Content>
            <Content>
              <Title>Dia dos pagametos escrito:</Title>
              <Input
              value={datePriceDescriptions}
                onChange={(e) => setDatePriceDescriptions(e.target.value)}
              />
            </Content>
            <Button onClick={generateWordDocument}>GERAR CONTRATO</Button>
          </>
        )}
        <ContentRow>
          {step > 1 && (
            <BiArrowToLeft
              color={"#ffff"}
              size={28}
              onClick={() => {
                setStep(step - 1);
              }}
            />
          )}
          {step < 3 && (
            <BiArrowToRight
              color={"#ffff"}
              size={28}
              onClick={() => {
                setStep(step + 1);
              }}
            />
          )}
        </ContentRow>
      </Main>
    </Container>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
