#Usando imagen base
FROM node
WORKDIR /livebi/src/app

# Copiar el package.json y el package-lock.json al contenedor
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos de la aplicación
COPY . .

RUN npm run build
# Exponer el puerto en el que se ejecuta tu aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "dist/main"]

