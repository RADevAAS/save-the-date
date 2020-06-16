import React, { Component } from "react";
import { PieChart } from "react-minimal-pie-chart";

import style from "./EventView.module.css";

export class EventView extends Component {
  render() {
    return (
      <div>
        <div className={style.background}>
          <div className={style.details}>
            jhfdiusgdgauyagsduiags Omitto iuris dictionem in libera civitate
            contra leges senatusque consulta; caedes relinquo; libidines
            praetereo, quarum acerbissimum extat indicium et ad insignem
            memoriam turpitudinis et paene ad iustum odium imperii nostri, quod
            constat nobilissimas virgines se in puteos abiecisse et morte
            voluntaria necessariam turpitudinem depulisse. Nec haec idcirco
            omitto, quod non gravissima sint, sed quia nunc sine teste dico.
            Novitates autem si spem adferunt, ut tamquam in herbis non
            fallacibus fructus appareat, non sunt illae quidem repudiandae,
            vetustas tamen suo loco conservanda; maxima est enim vis vetustatis
            et consuetudinis. Quin in ipso equo, cuius modo feci mentionem, si
            nulla res impediat, nemo est, quin eo, quo consuevit, libentius
            utatur quam intractato et novo. Nec vero in hoc quod est animal, sed
            in iis etiam quae sunt inanima, consuetudo valet, cum locis ipsis
            delectemur, montuosis etiam et silvestribus, in quibus diutius
            commorati sumus. Ego vero sic intellego, Patres conscripti, nos hoc
            tempore in provinciis decernendis perpetuae pacis habere oportere
            rationem. Nam quis hoc non sentit omnia alia esse nobis vacua ab
            omni periculo atque etiam suspicione belli? Apud has gentes, quarum
            exordiens initium ab Assyriis ad Nili cataractas porrigitur et
            confinia Blemmyarum, omnes pari sorte sunt bellatores seminudi
            coloratis sagulis pube tenus amicti, equorum adiumento pernicium
            graciliumque camelorum per diversa se raptantes, in tranquillis vel
            turbidis rebus: nec eorum quisquam aliquando stivam adprehendit vel
            arborem colit aut arva subigendo quaeritat victum, sed errant semper
            per spatia longe lateque distenta sine lare sine sedibus fixis aut
            legibus: nec idem perferunt diutius caelum aut tractus unius soli
            illis umquam placet. Intellectum est enim mihi quidem in multis, et
            maxime in me ipso, sed paulo ante in omnibus, cum M. Marcellum
            senatui reique publicae concessisti, commemoratis praesertim
            offensionibus, te auctoritatem huius ordinis dignitatemque rei
            publicae tuis vel doloribus vel suspicionibus anteferre. Ille quidem
            fructum omnis ante actae vitae hodierno die maximum cepit, cum summo
            consensu senatus, tum iudicio tuo gravissimo et maximo. Ex quo
            profecto intellegis quanta in dato beneficio sit laus, cum in
            accepto sit tanta gloria.EventView Omitto iuris dictionem in libera
            civitate contra leges senatusque consulta; caedes relinquo;
            libidines praetereo, quarum acerbissimum extat indicium et ad
            insignem memoriam turpitudinis et paene ad iustum odium imperii
            nostri, quod constat nobilissimas virgines se in puteos abiecisse et
            morte voluntaria necessariam turpitudinem depulisse. Nec haec
            idcirco omitto, quod non gravissima sint, sed quia nunc sine teste
            dico. Novitates autem si spem adferunt, ut tamquam in herbis non
            fallacibus fructus appareat, non sunt illae quidem repudiandae,
            vetustas tamen suo loco conservanda; maxima est enim vis vetustatis
            et consuetudinis. Quin in ipso equo, cuius modo feci mentionem, si
            nulla res impediat, nemo est, quin eo, quo consuevit, libentius
            utatur quam intractato et novo. Nec vero in hoc quod est animal, sed
            in iis etiam quae sunt inanima, consuetudo valet, cum locis ipsis
            delectemur, montuosis etiam et silvestribus, in quibus diutius
            commorati sumus. Ego vero sic intellego, Patres conscripti, nos hoc
            tempore in provinciis decernendis perpetuae pacis habere oportere
            rationem. Nam quis hoc non sentit omnia alia esse nobis vacua ab
            omni periculo atque etiam suspicione belli? Apud has gentes, quarum
            exordiens initium ab Assyriis ad Nili cataractas porrigitur et
            confinia Blemmyarum, omnes pari sorte sunt bellatores seminudi
            coloratis sagulis pube tenus amicti, equorum adiumento pernicium
            graciliumque camelorum per diversa se raptantes, in tranquillis vel
            turbidis rebus: nec eorum quisquam aliquando stivam adprehendit vel
            arborem colit aut arva subigendo quaeritat victum, sed errant semper
            per spatia longe lateque distenta sine lare sine sedibus fixis aut
            legibus: nec idem perferunt diutius caelum aut tractus unius soli
            illis umquam placet. Intellectum est enim mihi quidem in multis, et
            maxime in me ipso, sed paulo ante in omnibus, cum M. Marcellum
            senatui reique publicae concessisti, commemoratis praesertim
            offensionibus, te auctoritatem huius ordinis dignitatemque rei
            publicae tuis vel doloribus vel suspicionibus anteferre. Ille quidem
            fructum omnis ante actae vitae hodierno die maximum cepit, cum summo
            consensu senatus, tum iudicio tuo gravissimo et maximo. Ex quo
            profecto intellegis quanta in dato beneficio sit laus, cum in
            accepto sit tanta gloria.
          </div>
          <div className={style.stats}>
            <PieChart
              data={[
                { title: "One", value: 10, color: "#E38627" },
                { title: "Two", value: 15, color: "#C13C37" },
                { title: "Three", value: 20, color: "#6A2135" },
              ]}
              style={{ height: "100px" }}
            />
            <PieChart
              data={[
                { title: "One", value: 10, color: "#E38627" },
                { title: "Two", value: 15, color: "#C13C37" },
                { title: "Three", value: 20, color: "#6A2135" },
              ]}
              style={{ height: "100px" }}
            />
            <PieChart
              data={[
                { title: "One", value: 10, color: "#E38627" },
                { title: "Two", value: 15, color: "#C13C37" },
                { title: "Three", value: 20, color: "#6A2135" },
              ]}
              style={{ height: "100px" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default EventView;
