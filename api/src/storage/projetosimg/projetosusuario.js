import { con } from './connection.js'


import { Router } from 'express';
const server = Router();


function void gravarImagem( String urlImagem ) 
throws Exception   {      System.out.println("urlImagem = " + urlImagem);  
    File file = new File( urlImagem );
      if(file.exist()){
          BufferedImage img = ImageIO.read( file );
          ByteArrayOutputStream b = new ByteArrayOutputStream();          ImageIO.write( img, "jpg", b );
          byte[] imgArray = b.toByteArray();

          String sql = "INSERT INTO tb_imagens VALUES( NULL, ? )";          PreparedStatement stm = ConnectionFactory.getConexao().prepareStatement(sql);          stm.setBytes( 1, imgArray );          stm.executeUpdate();          stm.close();
      }else{
         'Não foi possível salvar a imagem'
      }


   }
