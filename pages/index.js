import { useState } from "react";
import { Button, Container, Form, ListGroup, ListGroupItem, Stack } from "react-bootstrap";

export default function Home() {
  const [lista, setLista] = useState([]);
  const [tarefa, setTarefa] = useState("");

  function adicionarNaLista() {
      setLista([tarefa, ...lista]);
      setTarefa("");
}
  return (
    <Container>
      <h1>Tarefas</h1>
      <Stack gap={3}>
        <Form.Control placeholder="Insira sua tarefa"
        onChange={(e)=> setTarefa(e.target.value)}></Form.Control>
        <Button onClick={adicionarNaLista}>Adicionar</Button>
        <ListGroup>
          {lista.map((tarefa) => (
            <ListGroupItem>{tarefa}</ListGroupItem>
          ))}
        </ListGroup>
      
      </Stack>
    </Container>
  )
}
