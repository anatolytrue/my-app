import PaintingList from './components/PaintingList'
import Section from './components/Section'; 
import paintings from './paintings.json'

export default function App(){
    return (
        <div>
            <Section title="Top weekly">
                <PaintingList items={paintings} />
            </Section>
            <Section title="Best">Best</Section>
        </div >
    );
}