import numpy as np
import matplotlib.pyplot as plt
import cv2

imagen = np.random.randint(0,256,(480,640), dtype=np.uint8)
print("Dimensiones: ",imagen.shape)
print("Tipo de dato: ",imagen.dtype)

plt.imshow(imagen, cmap='gray')
plt.title("Imagen simulada (matplotlib)")
plt.colorbar()
plt.axis('off')
plt.show()

cv2_imshow(imagen)
cv2.waitKey(0)
cv2.destroyAllWindows()


import cv2
img = cv2.imred()