<?php

include_once 'db.php';

class info_familia {

    private $conn;

    function __construct($conn)
    {
        $this->conn = $conn;
    }

    function getAll() {
        $sql = "SELECT 
            nome completo, 
             CPF, 
           endereço, 
           data_nascimento,
           telefone,
           email,
            DATE_FORMAT(data_nascimento, '%d/%m/%Y') data_nascimento
        FROM info_familia";
        $result = $this->conn->query($sql);

        $data = [];
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $data[] = $row;
            }
        }

        return $data;
    }

    function getById($codigo) {
        $sql = "SELECT 
            nome completo, 
           CPF, 
           endereço,  
           data_nascimento,
           telefone,
           email,
            DATE_FORMAT(data_nascimento, '%Y-%m-%d') data_nascimento
        FROM info_familia
        WHERE nome completo = ?";
        $stm = $this->conn->prepare($sql);

        $stm->bind_param('i', $codigo);
        $stm->execute();

        $result = $stm->get_result();

        $data = [];
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $data[] = $row;
            }
        }

        return $data;
    }

    function deleteById($codigo) {
        $sql = "DELETE FROM info_familia WHERE nome completo = ?";
        $stm = $this->conn->prepare($sql);

        $stm->bind_param('i', $codigo);
        $stm->execute();

        if (!$stm->error) {
            return ['status' => 'ok', 'msg' => 'Registro excluído com sucesso'];
        }

        return ['status' => 'error', 'msg' => 'Falha ao excluir registro'];
    }

    function updateById($codigo, $data) {
        $sql = "UPDATE info_familia SET 
           nome completo = ?,  
             CPF = ?,
            endereço = ?, 
           data_nascimento= ?,
           telefone= ?,
           email= ?
        WHERE nome completo = ?";

        $stm = $this->conn->prepare($sql);

        $stm->bind_param(
            'ssssssi', 
            $data[' nome completo'], 
            $data[' CPF'],
            $data['endereço'], 
            $data['data_nascimento'],  
            $data['telefone'], 
            $data['email']
            $codigo
        );
        $stm->execute();

        if (!$stm->error) {
            return ['status' => 'ok', 'msg' => 'Registro atualizado com sucesso'];
        }

        return ['status' => 'error', 'msg' => 'Falha ao atualizar registro'];
    }

    function create($data) {
        $sql = "INSERT INTO info_familia ( nome completo, CPF,endereço, data_nascimento, telefone, email) VALUES (?, ?, ?)";

        $stm = $this->conn->prepare($sql);

        $stm->bind_param(
            'ssssssi', 
            $data[' nome completo'], 
            $data[' CPF'],
            $data['endereço'], 
            $data['data_nascimento'],  
            $data['telefone'], 
            $data['email']
        );
        $stm->execute();

        if (!$stm->error) {
            return ['status' => 'ok', 'msg' => 'Registro criado com sucesso'];
        }

        return ['status' => 'error', 'msg' => 'Falha ao criar registro'];
    }
}

$allowed_methods = [
    'GET',
    'POST',
    'PUT',
    'DELETE'
];

if (!in_array($_SERVER['REQUEST_METHOD'], $allowed_methods)) {
    http_response_code(400);
    header('Content-Type: application/json');
    echo json_encode( [
        'status' => 'error',
        'msg' => 'Invalid Request'
    ] );
}

$info_familia = new info_familia($conn);

if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    echo json_encode($info_familia->deleteById($_GET['codigo']));
    return;
}

if ($_SERVER['REQUEST_METHOD'] == 'PUT') {
    $data = json_decode(file_get_contents("php://input"), true);
    echo json_encode($info_familia->updateById($_GET['codigo'], $data));
    return;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    echo json_encode($info_familia->create($data));
    return;
}

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if (isset($_SERVER['HTTP_REFERER']) && strpos($_SERVER['HTTP_REFERER'], 'info_familia/cadastro')) {
        echo json_encode($info_familia->getById($_GET['codigo']));
        return;
    }

    echo json_encode($info_familia->getAll());
    return;
}