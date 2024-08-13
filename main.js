let botao = document.querySelector("#adicionar");
let input = document.querySelector("#texto_tarefa");
let toda_L = document.querySelector("#container_2");
let data = document.querySelector("#data_tarefa");
let hora = document.querySelector("#hora_tarefa");


let lista_de_tarefa = [
    { tarefa: "Ladislau António Lote Cabanga ", concluida: false, data: 10_12_2005, hora: 17_30},
    { tarefa: "Cabanga", concluida: false, data: 2005, hora: 17-30}
];

function add_tarefa() {
    if (input.value.trim() !== "" && data.value.trim() !== "" &&  hora.value.trim() !== "") {
        lista_de_tarefa.push({
            tarefa: input.value,
            concluida: false,
            data: data.value, 
            hora: hora.value
        });
        input.value = "";
        data.value = "";
        hora.value = "";
        mostrar_lista();
    }
    else {
    	alert("ALERT: Preencha todos os campos")
    }
}

function mostrar_lista() {
    let li = "";
    if (lista_de_tarefa.length == 0) {
        toda_L.innerHTML = `<span id="tarefa_vazia">Nenhuma tarefa adicionada</span>`;
    } else {
        lista_de_tarefa.forEach((item, indice) => {
            li += `
                <li id="${item.concluida &&  "concluido"}">
                		<div id="left">
                			
	                    	<img src="icon_check.png" alt="" class="icon" id="feito" onclick="finalizar_tarefa(${indice})">
                    	
                    	<span id="span_tarefa">${item.tarefa}</span>
                    </div>
                    
                    <div id="right">
                    	<span>dia ${item.data}</span>
              	     <span>, ás ${item.hora}</span>
                    
                  	  <img src="icon_balde_lixo.png" alt="" class="icon" id="apagar" onclick="apagar_tarefa(${indice})">
                  	</div>
                </li>
            `;
        });
        toda_L.innerHTML = li;
    }
}

function apagar_tarefa(indice) {
    let confirmar = confirm("Deseja apagar esta tarefa?");
      
      if (confirmar) {
      	lista_de_tarefa.splice(indice, 1);
				mostrar_lista();
      }
    	
    
}

function finalizar_tarefa(indice) {
    lista_de_tarefa[indice].concluida = !lista_de_tarefa[indice].concluida;
    mostrar_lista();
}

botao.addEventListener('click', add_tarefa);
mostrar_lista();


