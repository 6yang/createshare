#include <stdio.h> 
int a[101],n;
void quicksort(int left, int right)
{
	if( left < right)
	{
		int i = left, j=right, x = a[left];  
		while(i<j)
		{
			while(i < j && a[j] >= x)
				j--;
			if(i <j)
				a[i++] = a[j]; 
			while(i < j && a[i] <= x){
				i++;
			}
			if(i<j){
				a[j--] = a[i];
			}
		}
		a[i] = x ;
		quicksort(left,i-1);
		quicksort(i+1,right);
	}
}
int main(){
	int i;
	scanf("%d",&n);
	for(i =0 ;i<n;i++ ){
		scanf("%d",&a[i]);
	}
	quicksort(0,n-1);
	for(i = 0 ;i< n ;i++){
		printf("%d ",a[i]);
	}
}
