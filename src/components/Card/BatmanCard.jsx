import style from "./Card.module.css"
import Button from "../Button/Button"
import BatmanImg from '../../assets/img/batman2.jpg'

const descriptionOne = `Batman (originariamente noto come The Bat-Man, lett. "Uomo Pipistrello") è un personaggio dei fumetti, ideato da Bill Finger e Bob Kane, pubblicato dalla DC Comics. Fece il suo esordio nel maggio del 1939 sul n. 27 della testata Detective Comics, ed è diventato una delle icone più importanti del fumetto supereroico; una copia dell'albo di esordio ha raggiunto quotazioni di quasi 1,4 milioni di dollari.
                    Batman è l'identità segreta di Bruce Wayne, un magnate miliardario, playboy e filantropo statunitense che possiede la Wayne Enterprises a Gotham City. Dopo aver assistito all'omicidio dei suoi genitori, il dottor Thomas e Martha Wayne, in una rapina finita male quando era bambino, ha giurato vendetta contro i criminali, un giuramento temperato da un ideale di giustizia. Si allena fisicamente e intellettualmente e crea un personaggio ispirato ai pipistrelli per combattere il crimine. A differenza della maggior parte dei supereroi, Batman non ha alcun superpotere: usa il suo intelletto e il suo atletismo, nonché le applicazioni scientifiche e tecnologiche per creare armi e strumenti con cui svolge le sue attività. Vive a Wayne Manor, dove sotto di essa si trova la Batcaverna, il quartier generale di Batman. Riceve un aiuto costante da altri alleati, tra i quali si possono citare Robin, Barbara Gordon (ex Batgirl e attuale Oracle), Nightwing, il commissario di polizia James Gordon e il suo maggiordomo Alfred Pennyworth. Un'ampia varietà di cattivi compone le avventure di Batman, incluso il suo acerrimo nemico, il Joker.`

const descriptionTwo = `Bob Kane concepì Batman all'inizio del 1939 per capitalizzare la popolarità di Superman; sebbene Kane rivendicasse spesso il merito esclusivo della creazione, Finger ha sostanzialmente sviluppato il concetto da un generico supereroe in qualcosa di più simile a un pipistrello.Batman è stato originariamente introdotto come uno spietato vigilante che spesso uccideva o mutilava criminali, ma si è evoluto in un personaggio con un codice morale rigoroso e un forte senso di giustizia.
                    Batman è il personaggio più emblematico della DC Comics insieme a Superman. Ha ricevuto una buona accoglienza ed è divenuto uno dei personaggi più iconici della cultura popolare e uno dei migliori personaggi di fantasia mai creati. È anche uno dei personaggi di maggior successo commerciale e la sua figura è stata autorizzata e presentata in vari media e merce venduti in tutto il mondo; questo include linee di giocattoli e videogiochi come la serie Batman: Arkham.
                    Il personaggio ha avuto anche trasposizioni televisive e cinematografiche di successo. Nella classifica dei cento maggiori eroi della storia dei fumetti del sito web IGN è stato inserito alla seconda posizione dopo Superman e prima dell'Uomo Ragno. Soprannominato Il giustiziere o Il cavaliere oscuro, in Italia il personaggio è stato presentato in passato con diversi nomi: Uomo Pipistrello, Ala d'Acciaio o il Fantasma.
                    Il 26 settembre 2024, Batman è diventato il primo supereroe a ricevere una stella alla Hollywood Walk of Fame di Los Angeles.`

export default function BatmanCard() {
    return (
        <div className={style.card}>
            <div className="card-top">
                <img className='img' src={BatmanImg} alt="" />
            </div>
            <div className="card-body">
                <h2>BatMan</h2>
                <p>{descriptionOne}</p>
                <p>{descriptionTwo}</p>
                <Button />
            </div>
        </div>
    )
}