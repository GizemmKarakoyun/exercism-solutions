export function degreesOfSeparation(
  familyTree: Record<string, string[]>,
  person1: string,
  person2: string
): number {
  if (person1 === person2) return 0

  const graph = new Map<string, Set<string>>()

  // Helper fonksiyon: node ekle
  function addEdge(a: string, b: string) {
    if (!graph.has(a)) graph.set(a, new Set())
    if (!graph.has(b)) graph.set(b, new Set())
    graph.get(a)!.add(b)
    graph.get(b)!.add(a)
  }

  // Ebeveyn-çocuk bağlantısı + kardeş bağlantısı
  for (const [parent, children] of Object.entries(familyTree)) {
    // Ebeveyn <-> Çocuk çift yönlü bağlantı
    for (const child of children) {
      addEdge(parent, child)
    }
    // Aynı ebeveynin çocukları arasında kardeş bağlantısı
    for (let i = 0; i < children.length; i++) {
      for (let j = i + 1; j < children.length; j++) {
        addEdge(children[i], children[j])
      }
    }
  }

  const queue: [string, number][] = [[person1, 0]]
  const visited = new Set<string>([person1])

  while (queue.length > 0) {
    const [current, distance] = queue.shift()!

    if (current === person2) return distance

    for (const neighbor of graph.get(current) ?? []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor)
        queue.push([neighbor, distance + 1])
      }
    }
  }

  return -1
}

