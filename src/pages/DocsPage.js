import { Card } from 'react-bootstrap';
import TableOfContents from '../components/TableOfContents';

function DocsPage() {
    return (

        <div>
            <Card>
                <Card.Body>
                    <Card.Title>Docs</Card.Title>
                    <Card.Text>
                        Documentation to be added soon!
                    </Card.Text>
                </Card.Body>
            </Card>

            <TableOfContents />
        </div>

    )
}

export default DocsPage;