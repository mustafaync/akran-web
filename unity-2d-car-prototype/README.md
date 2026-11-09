# Unity 2D Car Traffic Prototype

Bu klasörde Android / mobil için basit bir 2D top-down trafik sürüş prototipi için gereken scriptler vardır.

## Scriptler

- `PlayerController.cs`: Oyuncu aracı otomatik ileri gider ve 3 şerit arasında geçiş yapar.
- `TrafficSpawner.cs`: Ön tarafta rastgele trafik araçları oluşturur.
- `TrafficCar.cs`: Trafik araçlarını aşağı doğru hareket ettirir, oyuncunun altına geçince +25 para ekler ve ekrandan çıkınca yok eder.
- `GameManager.cs`: Oyun durumu ve para gösterimini yönetir.
- `RoadScroller.cs`: Yol parçalarını aşağı kaydırarak sonsuz yol hissi verir.

## Sahne Kurulumu

1. Unity içinde yeni bir 2D sahne aç.
2. `Main Camera` için `Projection` = `Orthographic`, `Size` = `6`.
3. `Player` adında bir GameObject oluştur:
   - `SpriteRenderer` -> `Square`
   - `Scale` = `(1, 2, 1)`
   - `Tag` = `Player`
   - `BoxCollider2D` ekle, `Is Trigger` = `true`
   - `Rigidbody2D` ekle, `Body Type` = `Kinematic`
   - `PlayerController` scriptini ekle.

4. `Road` adında boş bir GameObject oluştur:
   - İçine iki child `RoadPiece` oluştur.
   - Her birine `SpriteRenderer` ekle, `Sprite` = `Square`, `Scale` = `(6, 12, 1)`.
   - `RoadScroller` scriptini ekle.
   - `roadPieces` alanına her iki child transformunu ata.

5. `TrafficSpawner` adında boş bir GameObject oluştur:
   - `TrafficSpawner` scriptini ekle.
   - `player` alanına `Player` nesnesini ata.
   - `trafficPrefabs` alanına en az 1 trafik aracı prefab ekle.

6. `GameManager` adında boş bir GameObject oluştur:
   - `GameManager` scriptini ekle.
   - `moneyText` ve `gameOverText` için UI Text referanslarını ata.

7. UI için `Canvas` ekle:
   - `MoneyText` ve `GameOverText` objeleri oluştur.
   - `GameOverText` aktif değil yap.
   - `GameOverText.text` = `GAME OVER`.

## Trafik Aracı Prefab Oluşturma

1. Yeni bir GameObject oluştur ve `SpriteRenderer` ekle.
2. `Scale` = `(1, 2, 1)` veya farklı boyut.
3. `Tag` = `Traffic`
4. `BoxCollider2D` ekle, `Is Trigger` = `true`
5. `Rigidbody2D` ekle, `Body Type` = `Kinematic`
6. `TrafficCar` scriptini ekle.
7. Prefab olarak kaydet ve `TrafficSpawner` içine ekle.

## Oynanış

- Oyuncu aracı otomatik ileri gider.
- Sol/sağ ok tuşları veya ekranda sol/sağ dokunma ile şerit değiştir.
- Trafik araçları rastgele şeritte spawn olur.
- Çarpışma olursa oyun biter ve `GAME OVER` gösterilir.
- Araçların altından geçince +25 para kazanılır.
