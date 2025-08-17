const codonMap: { [codon: string]: string | 'STOP' } = {
  AUG: 'Methionine',
  UUU: 'Phenylalanine',
  UUC: 'Phenylalanine',
  UUA: 'Leucine',
  UUG: 'Leucine',
  UCU: 'Serine',
  UCC: 'Serine',
  UCA: 'Serine',
  UCG: 'Serine',
  UAU: 'Tyrosine',
  UAC: 'Tyrosine',
  UGU: 'Cysteine',
  UGC: 'Cysteine',
  UGG: 'Tryptophan',
  UAA: 'STOP',
  UAG: 'STOP',
  UGA: 'STOP',
}

export function translate(rna: string): string[] {
  const proteins: string[] = []

  // RNA dizisini 3'erli kodonlara böl, sonu tamam değilse hata fırlat
  if (rna.length % 3 !== 0) {
    // Ama eğer RNA'da geçerli bir STOP kodonuna kadar çeviri yapılabiliyorsa onu dönebiliriz
    // Burada ekstra kontrol yapacağız:
    // RNA dizisini üçlü parçalara bölüp geçerli kodonlar veya STOP bulana kadar devam ederiz.
    // Eğer dizinin sonunda eksik kodon varsa hata fırlatırız.
    // Bu yüzden bu if bloğunu kaldırıp alt kısımda detaylı kontrol yapacağız.
  }

  for (let i = 0; i < rna.length; i += 3) {
    const codon = rna.slice(i, i + 3)
    if (codon.length < 3) {
      // Eksik kodon varsa hata fırlat
      throw new Error('Invalid codon')
    }
    const protein = codonMap[codon]
    if (!protein) {
      throw new Error('Invalid codon')
    }
    if (protein === 'STOP') {
      break
    }
    proteins.push(protein)
  }

  return proteins
}
