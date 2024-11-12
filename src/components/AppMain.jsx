import BatmanImg from '../assets/img/batman2.jpg'
import Button from './Button/Button'
export default function AppMain() {

    return (
        <main>
            <div className="container">
                <div className="card">
                    <div className="card-top">
                        <img className='img' src={BatmanImg} alt="" />
                    </div>
                    <div className="card-body">
                        <h2>BatMan</h2>
                        <p>Batman (originariamente noto come The Bat-Man, lett. "Uomo Pipistrello") è un personaggio dei fumetti, ideato da Bill Finger e Bob Kane, pubblicato dalla DC Comics. Fece il suo esordio nel maggio del 1939 sul n. 27 della testata Detective Comics, ed è diventato una delle icone più importanti del fumetto supereroico; una copia dell'albo di esordio ha raggiunto quotazioni di quasi 1,4 milioni di dollari.

                            Batman è l'identità segreta di Bruce Wayne, un magnate miliardario, playboy e filantropo statunitense che possiede la Wayne Enterprises a Gotham City. Dopo aver assistito all'omicidio dei suoi genitori, il dottor Thomas e Martha Wayne, in una rapina finita male quando era bambino, ha giurato vendetta contro i criminali, un giuramento temperato da un ideale di giustizia. Si allena fisicamente e intellettualmente e crea un personaggio ispirato ai pipistrelli per combattere il crimine. A differenza della maggior parte dei supereroi, Batman non ha alcun superpotere: usa il suo intelletto e il suo atletismo, nonché le applicazioni scientifiche e tecnologiche per creare armi e strumenti con cui svolge le sue attività. Vive a Wayne Manor, dove sotto di essa si trova la Batcaverna, il quartier generale di Batman. Riceve un aiuto costante da altri alleati, tra i quali si possono citare Robin, Barbara Gordon (ex Batgirl e attuale Oracle), Nightwing, il commissario di polizia James Gordon e il suo maggiordomo Alfred Pennyworth. Un'ampia varietà di cattivi compone le avventure di Batman, incluso il suo acerrimo nemico, il Joker.</p>
                        <Button />
                    </div>
                </div>
            </div>
        </main>
    )
}