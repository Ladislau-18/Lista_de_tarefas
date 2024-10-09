let botao = document.querySelector("#adicionar");
let input = document.querySelector("#texto_tarefa");
let toda_L = document.querySelector("#container_2");
let data = document.querySelector("#data_tarefa");
let hora = document.querySelector("#hora_tarefa");


let lista_de_tarefa = [1];

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
                		
	                    	
	                    	<svg class="icon" id="feito" onclick="finalizar_tarefa(${indice})" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><defs><mask id="ipTCheckOne0"><g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><path fill="#555" d="M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z"/><path stroke-linecap="round" d="m16 24l6 6l12-12"/></g></mask></defs><path fill="#ff6600" d="M0 0h48v48H0z" mask="url(#ipTCheckOne0)"/></svg>
                    	
                    	<span id="span_tarefa">${item.tarefa}</span>
                    </div>
                    
                    <div id="right">
                    	<span>${item.data}</span>
              	     <span>, ás ${item.hora}</span>
                  	  
                  	  <svg class="icon" id="apagar" onclick="apagar_tarefa(${indice})" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><defs><mask id="ipTDelete0"><g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><path fill="#555" d="M9 10v34h30V10z"/><path stroke-linecap="round" d="M20 20v13m8-13v13M4 10h40"/><path fill="#555" d="m16 10l3.289-6h9.488L32 10z"/></g></mask></defs><path fill="#ff6600" d="M0 0h48v48H0z" mask="url(#ipTDelete0)"/></svg>
                  	</div>
                </li>
            `;
        });
        toda_L.innerHTML = li;
    }
}



function apagar_tarefa(indice) {
    let al = confirm("Deseja apagar esta tarefa?")
    let ali = al == true? lista_de_tarefa.splice(indice, 1)
    : alert("Não") ;
    mostrar_lista();

}


function finalizar_tarefa(indice) {
    lista_de_tarefa[indice].concluida = !lista_de_tarefa[indice].concluida;
    mostrar_lista();
}

botao.addEventListener('click', add_tarefa);
mostrar_lista();

 