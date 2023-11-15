import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Document, Page } from 'react-native-pdf-lib';
import RNFS from 'react-native-fs';

const PDFScreen = () => {
  const [pdfPath, setPdfPath] = useState(null);

  useEffect(() => {
    const loadPdf = async () => {
      try {
        const localPath = RNFS.CachesDirectoryPath + '../src/assets/pdfs/Biologia-Moderna-Volume-3-Amabis-e-Martho (2016).pdf';

        const fileExists = await RNFS.exists(localPath);

        if (!fileExists) {
          // Use o caminho correto do PDF na pasta pdfs do seu projeto
          const sourcePath = RNFS.DocumentDirectoryPath + '../src/assets/pdfs/Biologia-Moderna-Volume-3-Amabis-e-Martho (2016).pdf';

          await RNFS.copyFile(sourcePath, localPath);
        }

        setPdfPath(localPath);
      } catch (error) {
        console.error('Erro ao carregar o PDF:', error);
      }
    };

    loadPdf();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {pdfPath ? (
        <Document>
          <Page size="A4" style={{ flex: 1 }}>
            <Text>Visualizando PDF offline</Text>
          </Page>
        </Document>
      ) : (
        <Text>Carregando...</Text>
      )}
    </View>
  );
};

export default PDFScreen;
