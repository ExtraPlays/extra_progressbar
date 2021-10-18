local textoDisplay = ''
local porcentagem = 0

RegisterNetEvent("progress")
AddEventHandler("progress",function(time, text)
	textoDisplay = text
	if not text then textoDisplay = '...' end
	porcentagem = time	
	SendNUIMessage({ type = "ui", display = true, text = text, time = time})
end)
